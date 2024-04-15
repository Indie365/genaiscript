import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"

// https://astro.build/config
export default defineConfig({
    site: "https://microsoft.github.io",
    base: "/genaiscript",
    integrations: [
        starlight({
            title: "GenAIScript",
            favicon: "/images/favicon.png",
            logo: {
                src: "./src/assets/logo.svg",
            },
            components: {
                Footer: "./src/components/Footer.astro",
            },
            social: {
                github: "https://github.com/microsoft/genaiscript",
            },
            editLink: {
                baseUrl:
                    "https://github.com/microsoft/genaiscript/edit/main/docs/",
            },
            sidebar: [
                {
                    label: "Start Here",
                    autogenerate: { directory: "getting-started" },
                },
                {
                    label: "Case Studies",
                    autogenerate: { directory: "case-studies" },
                },
                {
                    label: "Guides",
                    autogenerate: { directory: "guides" },
                },
                {
                    label: "Reference",
                    autogenerate: { directory: "reference" },
                },
                {
                    label: "FAQ",
                    link: "faq",
                },
                {
                    label: "Slides",
                    link: "slides"
                },
                {
                    label: "Contributing",
                    link: "https://github.com/microsoft/genaiscript/blob/main/CONTRIBUTING.md",
                },
            ],
        }),
    ],
})
