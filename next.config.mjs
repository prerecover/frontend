/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    reactStrictMode: true,
    images: { domains: ['localhost', "img-cdn.pixlr.com", "encrypted-tbn0.gstatic.com", "static.vecteezy.com", "www.fotor.com"] },
    env: {
        NEXT_PUBLIC_BACKEND: process.env.NEXT_PUBLIC_BACKEND
    },

};

export default nextConfig
