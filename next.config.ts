import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV==="production";
const nextConfig: NextConfig = {
  output:"export",
  images:{
    unoptimized:true,
  },
  reactStrictMode:true,
  basePath:isProd? "/YatsenkoMaksym.github.io":"",
  assetPrefix:isProd?"/YatsenkoMaksym.github.io/":"",
};

export default nextConfig;
