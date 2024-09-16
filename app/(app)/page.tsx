"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useDebounce } from "use-debounce";
import RenderIfVisible from "react-render-if-visible";

import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { SingleCard } from "@/components/SingleCard";
import { MuseumObjectSearchResult } from "@/museumAPI";

const ESTIMATED_ITEM_HEIGHT = 300;

export default function Home() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchQueue] = useDebounce(search, 1000);
  const [artworksNumber, setArtworksNumber] = useState(0);
  const [artworkIds, setArtworkIds] = useState<number[]>([]);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchArtworks = async () => {
      try {
        setLoading(true);
        const response = await axios.post<{ error?: string, success: boolean, data: MuseumObjectSearchResult }>(
          "/api/search",
          { q: searchQueue },
          { signal: controller.signal }
        );
        setArtworkIds(response.data.data.objectIDs);
        setArtworksNumber(response.data.data.total);
      } catch (e: unknown) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    if (search) {
      fetchArtworks();
    }

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [searchQueue]);

  return (
    <div className="container mx-auto px-4 mt-10">
      <header className="max-w-md mx-auto flex py-2 border-b flex-col mb-8">
        <div className="flex items-center">
          <span className="text-lg font-bold">Artworks</span>
        </div>
        <div>
          <Input
            value={search}
            className="mt-2"
            placeholder="Search for an artwork"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>

      <div className="flex flex-col gap-4 justify-center items-center">
        {loading ? (
          <>
            <Skeleton className="h-[300px] w-full" />
            <Skeleton className="h-[300px] w-full" />
          </>
        ) : (
          artworkIds?.map((id) => (
            <div key={id} className="w-3/6">
              <RenderIfVisible defaultHeight={ESTIMATED_ITEM_HEIGHT} stayRendered>
                <SingleCard artworkId={id} />
              </RenderIfVisible>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
