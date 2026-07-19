import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // cssChunking 체크
  // true : cssChunking이 활성화되어 CSS가 각 페이지별로 분리되어 로드됨
  // false : cssChunking이 비활성화되어 CSS가 전체 페이지에서 공통으로 로드됨
  // strict : cssChunking이 활성화되어 CSS가 각 페이지별로 분리되어 로드되며, 공통 CSS는 별도의 파일로 분리됨
  // cssChunking: true,
  // experimental: {
  //   optimizeCss: true, // true | 'strict' | false
  // },

  // 개발자 도구 표시 여부
  devIndicators: false,
  
  // 외부이미지 사용 시
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.news1.kr',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.dog.ceo',
        pathname: '/**',
      }
    ]
  }
};

export default nextConfig;
