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
        ],
    },
    output: 'standalone',
};

module.exports = nextConfig;
