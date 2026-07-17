const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function PostListPage() {
    await delay(3000); // 3초 지연

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    return (
        <div className="p-6 bg-white">
            <h1 className="text-xl font-bold mb-4 text-slate-800">3초 지연 후 조회되는 게시글 목록</h1>
            {posts.slice(0,3).map((post: any) => (
                <p key={post.id} className="border-b py-2 text-slate-700">{post.title}</p>
            ))}
        </div>
    )
}