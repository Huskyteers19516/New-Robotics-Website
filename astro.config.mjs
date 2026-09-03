// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "Jockey One",
            cssVariable: "--font-jockey-one-astro",
        },
        {
            provider: fontProviders.google(),
            name: "Inter",
            cssVariable: "--font-inter-astro",
            weights: ["100 900"],
        },
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});
