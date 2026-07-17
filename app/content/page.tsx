// ssr (server side rendering) 방식으로 데이터를 가져오는 페이지

export default async function ContentPage() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    const displayPosts = posts.slice(0,5);

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-3xl shadow-xl border border-slate-100">
            <h1 className="text-2xl font-black text-slate-800 mb-6 border-b pb-4">
                실시간 서버 데이터 목록
            </h1>
            <div className="space-y-4">
                {displayPosts.map((post: any) => (
                    <div key={post.id} className="p-4 bg-slate-50 rounded-2xl hover:bg-indigo-50/50 transition-all" >
                        <h2 className="font-bold text-slate-800 text-lg captialize">
                            {post.title}
                        </h2>
                        <p className="text-slate-500 text-sm mt-1">{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}