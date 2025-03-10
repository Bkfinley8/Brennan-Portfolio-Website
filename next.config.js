/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  compiler: {
    styledComponents: true,
  },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '/Brennan-Portfolio-Website',
    assetPrefix: '/Brennan-Portfolio-Website',
  } : {}),
}

module.exports = nextConfig