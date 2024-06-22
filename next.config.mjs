/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: "",
  assetPrefix: isProd ? "/" : "",
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // async headers() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       headers: [
  //         { key: 'Access-Control-Allow-Credentials', value: 'true' },
  //         { key: 'Access-Control-Allow-Origin', value: '*' },
  //         { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
  //         { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
  //       ],
  //     },
  //   ];
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/categories',
  //       destination: `https://api.notion.com/v1/databases/${databaseId}/query`,
  //     },
  //     {
  //       source: '/api/blocks/:id',
  //       destination: `https://api.notion.com/v1/blocks/:id/children`,
  //     },
  //   ];
  // },
};

export default nextConfig;
