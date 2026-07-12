import Link from 'next/link'

export default function Home() {
  // return <h1>src 폴더 없어도 잘 동작합니다</h1>
  return (
    <div>
      <h1>홈페이지</h1>
      <nav>
        <Link href="/about">회사 소개 가기</Link>
        <br />
        <Link href="/contact">연락처로 가기</Link>
      </nav>

      <div className="p-10">
        <h1 className="text-5xl font-extrabold text-indigo-500 tracking-tight">
          Next.js-Tailwind v4
        </h1>
        <p className="mt-4 text-lg text-slate-6000">
          설정 파일 없이 바로 적용되는 TailwindCSS v4를 Next.js 14에서 사용해보세요.
        </p>
        <button className="mt-6 bg-indigo-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-indigo-700 active:scale-95 transition-all">
          시작하기
        </button>

        <p className="text-brand">안녕하세요1</p>
        <p className="text-brand bg-brand">안녕하세요2</p>
      </div>
    </div>
  )
}