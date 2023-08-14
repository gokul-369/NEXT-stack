/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/signup",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
