/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'doorcountybouncyhouse.com',
        pathname: '/images/**',
      },
    ],
  },
  // Disable unnecessary features for static sites
  experimental: {
    serverActions: false,
  },
};

export default nextConfig;
