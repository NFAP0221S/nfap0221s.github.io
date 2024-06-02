/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const prefix =
  process.env.NODE_ENV === 'production' ? 'https://nfap0221s.github.io' : ""


const nextConfig = {
  output: "export",
  // basePath: "",
  // basePath: isProd ? "/nfap0221s.github.io" : "",
  // assetPrefix: isProd ? "/nfap0221s.github.io/" : "",
  basePath: prefix,
  assetPrefix: isProd ? "/nfap0221s.github.io/" : "",
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
