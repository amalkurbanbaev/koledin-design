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

        ],
        domains: ['admin.koledin.com'],
    },
    output: 'standalone',
};

module.exports = nextConfig;
