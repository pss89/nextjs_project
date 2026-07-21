// import Link from "next/link";
// import "./globals.css";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="ko">
//       <body>
//         {/* 여기에 공통 메뉴를 만듭니다 */}
//         <nav style={{ padding: "20px", borderBottom: "1px solid #ccc"}}>
//           <Link href="/">Home</Link> | 
//           <Link href="/about" style={{ marginLeft: "10px" }}>About</Link>
//         </nav>
//         {/* page tsx 노출 */}
//         <main>{children}</main>
//         <footer style={{ marginTop: "50px", color:"gray" }}>
//           (c) 프로필카드 페이지
//         </footer>
//       </body>
//     </html>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { Noto_Sans_KR } from 'next/font/google';
import "./globals.css";

// 폰트 객체 생성 및 옵션 설정
const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'], // 영문 서브셋으로 용량 최적화 (한글은 기본 지원)
  weight: ['400', '700'], // 사용할 폰트 굵기 지정
  display: 'swap', // 폰트 로드 전 기본 폰트 표시
});

export default function RootLayout({
  children,
}: Readonly <{
  children: React.ReactNode;
}>) {
  const [inputText, setInputText] = useState("");

  // suppressHydrationWarning 속성은 클라이언트와 서버 간의 HTML 불일치로 인한 경고를 억제하는 데 사용됩니다.
  return (
    <html lang="ko" suppressHydrationWarning>
      {/* <body className="bg-slate-100 min-h-screen flex flex-col m-0 font-sans"> */}
      <body className={`bg-slate-100 min-h-screen flex flex-col m-0 ${notoSansKr.className}`} suppressHydrationWarning>
        <nav className="bg-indigo-600 text-white p-6 shadow-md flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex gap-6 font-semibold">
            <Link href="/" className="hover:text-indigo-200 transition">홈 (Home)</Link>
            <Link href="/about" className="hover:text-indigo-200 transition">회사소개 (About)</Link>
            <Link href="/blog" className="hover:text-indigo-200 transition">블로그 (Blog)</Link>
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <span className="text-xs text-indigo-200 bg-indigo-800 px-2 py-1 rounded">Layout State</span>
          <input type="text" placeholder="여기에 글을 쓰고 페이지를 이동해보세요..."
            value={inputText} onChange={(e) => setInputText(e.target.value)} 
            className="px-3 py-1.5 rounded-lg text-slate-800 bg-white border-none text-sm w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
        </div>

        <main className="flex-1 p-8">
          {children}
        </main>

        <footer className="bg-slate-800 text-slate-400 text-center py-4 text-sm border-t border-slate-700 mt-auto">
          @ 2026 Next.js 마스터클래스
        </footer>

      </body>
    </html>
  )
}