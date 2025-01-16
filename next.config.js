/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  basePath: '/Brennan-Portfolio-Website ',
}

module.exports = nextConfig 