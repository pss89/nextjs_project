import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        {/* 여기에 공통 메뉴를 만듭니다 */}
        <nav style={{ padding: "20px", borderBottom: "1px solid #ccc"}}>
          <Link href="/">Home</Link> | 
          <Link href="/about" style={{ marginLeft: "10px" }}>회사 소개</Link>
        </nav>
        {/* page tsx 노출 */}
        <main>{children}</main>
        <footer style={{ marginTop: "50px", color:"gray" }}>
          (c) 2026년 내 멋진 사이트
        </footer>
      </body>
    </html>
  );
}
