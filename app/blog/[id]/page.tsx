import Link from "next/link";

export default async function BlogDetailPage({ 
    params,
}: Readonly<{
    params: Promise<{ id: string }>;
}>) {
    const resolvedParams = await params;

    return (
        <div className="max-w-md max-auto mt-10 p-6 bg-white rounded-2xl shadow-md border border-slate-100">
            <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-2 5 py-1 rounded-md mb-3">
                Blog 상세 페이지
            </div>
            <h1 className="text-2xl font-extrabold text-slate-800 mb-2">
                {resolvedParams.id}번 글을 읽고 계십니다.
            </h1>
            <p className="text-slate-500 text-sm">
                주소창의 숫자를 다른 글자나 숫자로 바꿔보세요.
                화면의 숫자가 실시간으로 변하는것을 볼수있습니다.
            </p>

            <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition mt-4">
                블로그 글목록으로 돌아가기 -&gt;
            </Link>
        </div>
    );
}