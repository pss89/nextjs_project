import Link from 'next/link'

export default function Home() {
  // return <h1>src 폴더 없어도 잘 동작합니다</h1>
  return (
    <div>
      <h1>홈페이지</h1>
      <nav>
        <Link href="/about">회사 소개 가기</Link>
      </nav>
    </div>
  )
}