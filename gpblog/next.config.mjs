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
  async headers() {
    return [
      {
        source: '/usports/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/posts',
        destination: 'https://api.notion.com/v1/databases/bbf5e4a9318a4da199df107b0d42de80/query',
      },
    ];
  },

  // env: {
  //   NEXT_PUBLIC_NOTION_API_KEY: process.env.NEXT_PUBLIC_NOTION_API_KEY,
  //   NEXT_PUBLIC_NOTION_DATABASE_ID: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID,
  // },
};

export default nextConfig;
