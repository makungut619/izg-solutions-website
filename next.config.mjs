/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // About now lives on the home page. 308 keeps old links and SEO value.
        source: "/about",
        destination: "/#about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
