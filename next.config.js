/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  images: {
    domains: ['openweathermap.org'],
    // formats: ['image/*', 'image/png'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'openweathermap.org',
    //     port: '',
    //     pathname: '/img/w/**',
    //   },
    // ],
  },
};

module.exports = nextConfig;
