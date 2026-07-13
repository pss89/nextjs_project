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
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly <{
  children: React.ReactNode;
}>) {
  const [inputText, setInputText] = useState("");

  return (
    <html lang="ko">
      <body className="bg-slate-100 min-h-screen flex flex-col m-0 font-sans">
        <nav className="bg-indigo-600 text-white p-6 shadow-md flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex gap-6 font-semibold">
            <Link href="/" className="hover:text-indigo-200 transition">홈 (Home)</Link>
            <Link href="/about" className="hover:text-indigo-200 transition">회사소개 (About)</Link>
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