import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return {
    name: "Digital GiGz AI Lab",
    short_name: "GiGz AI Lab",
    description: "Practical AI education and resources for healthcare professionals.",
    start_url: `${basePath}/`,
    display: "standalone",
    background_color: "#f9f9fc",
    theme_color: "#6d4aff",
    icons: [
      {
        src: `${basePath}/favicon.svg`,
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
