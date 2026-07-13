// import Link from 'next/link';

// export default function About() {
//     return (
//         <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
//             <Link href="/" className="bg-rose-50 text-rose-600 px-4 py-2 rounded-full text-sm font-:semibold active:scale-95 transition-all hover:bg-rose-100">
//                 Home
//             </Link>
//         </div>
//     );
// }

export default function AboutPage() {
    return (
        <div className="bg-amber-50 border-2 border-amber-200 p-8 rounded-2xl shadow-sm max-w-2xl mx-auto">
            <div className="inline-block bg-amber-200 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full mb-4">홈페이지
                page.tsx (About)
            </div>
            <h1 className="text-3xl font-extrabold text-slate-800 mb-4">여기는 회사소개 본문입니다.</h1>
            <p className="text-slate-600 leading-relaxed">
                보시다시피 상단의 인디고색 메뉴바 구조는 그대로 유지한채, 내부의 본문 영역만 홈페이지에서 회사 소개 페이지로 쏙 갈아 끼워졌습니다. <br />
                이것이 Nextjs 가 의도한 <span className="font-semibold text-indigo-600">Layout 과 Page의 중첩 결합 원리</span> 입니다.
            </p>
        </div>
    );
}