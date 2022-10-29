/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'assets.specialized.com',
        port: ''
      }

    ],
  },
}

module.exports = nextConfig
