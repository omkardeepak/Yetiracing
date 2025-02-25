/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enable strict mode
    images: {
      domains: ['yetiracing.cusat.co.in'], // Add your domain if hosting images externally
    },
    output: 'standalone', // Ensures better build optimizations
  };
  
  export default nextConfig;
  