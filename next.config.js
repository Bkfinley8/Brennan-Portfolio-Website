/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    serverActions: true,
  },
  output: 'standalone',
  basePath: '/Brennan-Portfolio-Website ',
}

module.exports = nextConfig 