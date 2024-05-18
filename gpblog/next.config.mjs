/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export",
  basePath: isProd ? "/NFAP0221S.github.io" : "",
  assetPrefix: isProd ? "/NFAP0221S.github.io/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
