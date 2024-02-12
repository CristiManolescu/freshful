/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "about.emag.ro",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.freshful.ro",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
