import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n.ts')

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'avcdnjlcanxlzmjwcxhl.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
