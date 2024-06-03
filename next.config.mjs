/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export",
  // basePath: "",
  // assetPrefix: "",
  basePath: isProd ? "/nfap0221s.github.io" : "",
  assetPrefix: isProd ? "/nfap0221s.github.io/" : "",
  // swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;