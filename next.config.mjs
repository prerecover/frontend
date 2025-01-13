/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    reactStrictMode: true,
    images: { domains: ['localhost', "img-cdn.pixlr.com", "encrypted-tbn0.gstatic.com", "static.vecteezy.com", "www.fotor.com", "t.me", "lh3.googleusercontent.com", "sun9-49.userapi.com", "c3e9083f-3cdf-458b-b641-36c2d0e15309.selstorage.ru"] },
    env: {
        NEXT_PUBLIC_BACKEND: process.env.NEXT_PUBLIC_BACKEND
    },

};

export default nextConfig
