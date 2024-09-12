"use client"

import axios from 'axios'
import { useEffect, useState } from 'react'
import { Artwork } from '@/museumAPI'
import { useParams } from 'next/navigation'

export default function Page() {
    const { artworkid } = useParams()
    const [artwork, setArtwork] = useState<Artwork>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>();
    console.log(artworkid)

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const fetchArtwork = async () => {
            try {
                setLoading(true);
                const response = await axios.post<{ error?: string, success: boolean, data: Artwork }>(
                    "/api/get-artwork",
                    { objectId: artworkid },
                    { signal: controller.signal }
                );
                if (isMounted) {
                    setArtwork(response.data.data);
                }
            } catch (e: unknown) {
                if (axios.isCancel(e)) {
                    console.log('Request canceled:', e.message);
                } else {
                    console.error(e);
                    if (isMounted) {
                        setError(e instanceof Error ? e.message : 'An unknown error occurred');
                    }
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchArtwork();

        return () => {
            isMounted = false;
            controller.abort();
        };
    }, [artworkid]);

    useEffect(() => {
        if (artwork && artwork.primaryImage) {

        }
    }, [
        artwork
    ])

    if (error) {
        return <div>Error, please try again later.</div>;
    }

    return (
        <div>
            {loading ? <p>Loading...</p> : (
                <div>
                    {
                        artwork && (
                            <div>
                                <h1>{artwork.title}</h1>
                                <p>{artwork.objectID}</p>
                            </div>
                        )
                    }
                    <h1>Single Artwork Page</h1>
                </div>
            )}
        </div>
    )
}