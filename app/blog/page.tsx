"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const posts = [
    { id: 1, title: "첫 번째 포스트", content: "첫 번째 포스트 내용입니다." },
    { id: 2, title: "두 번째 포스트", content: "두 번째 포스트 내용입니다." },
    { id: 3, title: "세 번째 포스트", content: "세 번째 포스트 내용입니다." },
]

export default function blog() {
    const router = useRouter(); // 리모컨(router 객체)을 가져옵니다.
    
    const handleCreatePost = () => {
        // 가상의 로직 : 글쓰기 권한 체크
        alert("게시글 저장에 성공하였습니다! 목록으로 돌아갑니다.");

        // 페이지이동
        router.push("/blog"); // push()를 사용하여 페이지 이동
    }

    return (
        <div className="max-w-2xl max-auto mt-10 p-4">
            <h1 className="text-3xl font-extrabold text-slate-800 mb-6 border-b pb-4 text-white">
                최신 블로그 글목록
            </h1>

            <button className="text-white bg-indigo-600 px-4 py-2 rounded-lg mb-6 cursor-pointer hover:bg-indigo-700 active:scale-95 transition-all"
                    onClick={handleCreatePost}>
                글쓰기 완료 테스트
            </button>

            <div className="space-y-4">
                {posts.map((post) => (
                    <div key={post.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
                        <h2 className="text-xl font-bold text-slate-800 mb-1">
                            {post.title}
                        </h2>
                        <p className="text-slate-500 text-sm mb-4">{post.content}</p>

                        <Link href={`/blog/${post.id}`} className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition">
                            자세히보기 -&gt;
                        </Link> 
                    </div>
                ))}
            </div>
        </div>
    );
}