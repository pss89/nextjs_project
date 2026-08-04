import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { updatePostAction } from "../action";

export default async function PostEditPage({
  params,
}: Readonly<{ 
  params: Promise<{ id : string }>
}>) {
  const resolvedParams = await params;
  const postId = parseInt(resolvedParams.id, 10); // 10진수로 변환

  console.log("postId:", postId);

  const post = await prisma.post.findUnique({
    where: { id: postId }
  });

  // 데이터가 없으면 404 페이지를 보여주도록 처리
  if (!post) {
    notFound();
  }

  // const updatePostActionWithId = updatePostAction.bind(null, postId); // 바인딩을 사용하여 postId를 updatePostAction에 전달
  // console.log("postId:", postId);

  // TypeScript 에러를 없애기 위해 반환값을 무시하는(void) 래퍼 함수를 생성합니다.
  const handleSubmit = async (formData: FormData) => {
    "use server";
    await updatePostAction(postId, formData);
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-8 bg-white rounded-3xl shadow-xl border border-slate-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-black text-slate-800">글 수정하기</h1>
        <Link href={`/post-detail/${postId}`} className="text-xs text-slate-400 hover:underline">취소</Link>
      </div>

      <form action={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-600 mb-1">제목</label>
          <input type="text" 
                name="title" 
                defaultValue={post.title}
                className="w-full p-3 rounded-xl border text-sm text-slate-800 focus:outline-indigo-600" required />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-600 mb-1">내용</label>
          <textarea name="content" 
                    defaultValue={post.content ?? ""}
                    rows={5}
                    className="w-full p-3 rounded-xl border text-sm text-slate-800 focus:outline-indigo-600" required>
          </textarea>
        </div>

        <button type="submit" className="w-full bg-slate-800 text-white py-3 rounded-xl font-bold cursor-pointer hover:bg-slate-900 transition-all">수정 완료</button>

      </form>
    </div>
  )
}