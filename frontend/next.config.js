/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "admin.koledin.com",
                port: "443",
                pathname: "/uploads/**",
            },
            {
                protocol: "http",
                hostname: "admin.koledin.com",
                port: "80",
                pathname: "/uploads/**",
            },
            {
                protocol: "http",
                hostname: "127.0.0.1",
                port: "1337",
                pathname: "/uploads/**",
            },
        ],
        domains: ["admin.koledin.com"],
        unoptimized: true,
    },
    output: "standalone",
};

module.exports = nextConfig;
