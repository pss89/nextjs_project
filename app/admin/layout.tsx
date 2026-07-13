import Link from "next/link";

export default function AdminLayout({
  children,
}: Readonly <{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-[500px] gap-6 bg-slate-6 p-6 rounded-2xl border border-slate-200">
      {/* 관리자 전용 왼쪽 사이드바 메뉴 */}

      <aside className="w-48 bg-white p-4 rounded-xl shadow-sm flex-col gap-2 text-slate-700 border border-slate-200">
        <div className="font-bold text-slate-400 text-xs px-2 mb-2">Admin Menu</div>
        <Link href="/admin" className="p-2 rounded-lg hover:bg-indigo-50 text-sm font-medium transition">대시보드 홈</Link>
        <Link href="/admin/users" className="p-2 rounded-lg hover:bg-indigo-50 text-sm font-medium transition">회원관리</Link>
      </aside>

      {/* 관리자 본문 내용이 렌더링 될 영역 */}
      <main className="flex-1 bg-white p-6 rounded-xl shadow-sm">
        {children}
      </main>
    </div>
  )
}