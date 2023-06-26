/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  swcMinify: true,
  experimental:{
    appDir: true
  },
  images: {
    domains: ['1nhale.in', 'demo2.1nhale.in'],
    unoptimized : true,
  }
}

module.exports = nextConfig