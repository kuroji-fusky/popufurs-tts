// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development'
  },
  images: {
    domains: [
      'res.cloudinary.com',
    ]
  }
}

module.exports = nextConfig
