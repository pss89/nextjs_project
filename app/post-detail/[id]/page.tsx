import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function PostDeail({
  params,
}: Readonly<{ 
  params: Promise<{ id : string}>
}>) {
  const resolvedParams = await params;

  const postId = parseInt(resolvedParams.id, 10); // Convert the string to a number
  const post = await prisma.post.findUnique({
    where : { id: postId } // 검색조건
  })

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-xl mx-auto mt-16 p-8 bg-white rounded-3xl border border-slate-100 shadow-xl/50">
      <Link href="/post-list" className="inline-block text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg mb-6
        horver:bg-indigo-100 transition-colors">
          전체목록으로 돌아가기
      </Link>

      <article>
        <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-4">{post.title}</h1>
        <div className="text-xs text-slate-400 font-mono mb-8 border-b pb-4">
          작성일자 : {new Date(post.createdAt).toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                })}
        </div>

        <p className="text-slate-700 text-base leading-relaxed whitespace-pre-wrap">
          {post.content}
        </p>
      </article>
    </div>
  )
}