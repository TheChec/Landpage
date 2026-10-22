import type { NextConfig } from "next";

// En GitHub Pages el sitio vive en /Landpage; en local o Vercel se deja vacío.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
