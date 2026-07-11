/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/Amirmobash/mailsignal/**',
      },
    ],
  },
};
export default nextConfig;
