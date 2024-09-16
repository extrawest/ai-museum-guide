# AI Museum Guide

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)]()
[![Maintaner](https://img.shields.io/static/v1?label=Nariman%20Mamutov&message=Maintainer&color=red)](mailto:nairman.mamutov@extrawest.com)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)]()
![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)
![GitHub release](https://img.shields.io/badge/release-v1.0.0-blue)

![](https://raw.githubusercontent.com/extrawest/ai-museum-guide/main/preview.gif)

Live Demo: [AI Museum Guide](https://ai-museum-guide.vercel.app/)

AI Museum Guide is a Next.js-based application designed to provide an enhanced museum experience by allowing users to search for artworks in the app's database. The app uses the Groq LLaMA model to identify artworks and provide detailed descriptions and information about them.

## Features

- **Artwork Search:** Users can search for artworks available in the database.
- **Detailed Descriptions:** After selecting an artwork, the app provides detailed information about its history, style, artist, and more.
- **Responsive UI:** Built with the ShadCN library for a clean, responsive, and interactive user interface.

## Tech Stack

- **Frontend:** Next.js with React.js
- **Backend:** Node.js
- **AI Model:** Groq LLaMA for generating detailed descriptions of the artworks
- **UI Library:** ShadCN for a seamless and modern user interface

## Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up environment variables:
   Create a `.env.local` file in the root directory and add the required API keys and configuration for the Groq LLaMA model, if applicable.

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Usage

1. Search for an artwork from the available database.
2. View detailed information and descriptions about the selected artwork.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
