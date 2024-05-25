/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export",
  basePath: "",
  assetPrefix: isProd ? "/nfap0221s.github.io/" : "",
  // swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_NOTION_API_KEY: process.env.NEXT_PUBLIC_NOTION_API_KEY,
    NEXT_PUBLIC_NOTION_DATABASE_ID: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID,
  },
};

export default nextConfig;
