import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // 개발자 도구 표시 여부
  devIndicators: false,
  
  // 외부이미지 사용 시
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.news1.kr',
        pathname: '/**',
      }
    ]
  }
};

export default nextConfig;
