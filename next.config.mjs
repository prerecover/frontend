/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: { domains: ['localhost', "img-cdn.pixlr.com", "encrypted-tbn0.gstatic.com", "static.vecteezy.com", "www.fotor.com"] },

  env: {
    BASE_URL: process.env.BACKEND
  },

};

export default nextConfig
