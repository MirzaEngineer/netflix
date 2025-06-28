/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
      },
    images:{
        domains:['cdn.myanimelist.net']
    }
};

export default nextConfig;
