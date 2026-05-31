import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sri Supraja Infracon",
    short_name: "Sri Supraja",
    description:
      "DTCP and RERA approved open plots near Hyderabad.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0B1633",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
