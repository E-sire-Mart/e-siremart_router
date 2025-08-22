/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/user/:path*',
        destination: 'https://e-sirefront-end-ou6d3gpgk-mykolas-projects-fd645fac.vercel.app/:path*',
      },
      {
        source: '/vendor/:path*',
        destination: 'https://vendor-side.vercel.app/:path*',
      },
      {
        source: '/admin/:path*',
        destination: 'https://new-admin-brown.vercel.app/:path*',
      },
      {
        source: '/api/:path*',
        destination: 'https://esirebackend.onrender.com/:path*',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/user',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
