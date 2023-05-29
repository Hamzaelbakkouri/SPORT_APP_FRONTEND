/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.pantofit.com",
      "image.cnbcfm.com",
      "firebasestorage.googleapis.com",
      "localhost:3000",
      "github.com",
      "seeklogo.com",
      "pantofit.pythonanywhere.com",
      "static.yabiladi.com",
      "images.pexels.com",
      "blog.pantofit.com"
    ],
  },
}

module.exports = nextConfig
