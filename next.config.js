/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    endpoint: "YOU_GRAPHQL_ENDPOINT",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "YOUR_HOSTNAME",
        port: "",
        pathname: "YOUR_PATHNAME/**",
      },
    ],
    unoptimized: true,
  }
};
module.exports = nextConfig
