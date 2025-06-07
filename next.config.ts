import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
        domains: ['source.unsplash.com'],

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'babynama.com',
        port: '',
        pathname: '/_next/image/**',
        
      },
    ],
  },
};

export default nextConfig;
