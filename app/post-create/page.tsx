import { createPostAction } from "./action";

export default function PostCreatePage() {
  return (
    <div className="max-w-md mx-auto mt-12 p-8 bg-white rounded-3xl shadow-xl border border-slate-1000">
      <h1 className="text-2xl font-black text-slate-800 mb-6">새로 작성하기 (server action)</h1>

      <form action={createPostAction} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-600 mb-1">제목</label>
          <input type="text" name="title" className="w-full p-3 text-slate-900 rounded-xl border border-slate-200 focus:outline-indigo-600 text-sm" required />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-600 mb-1">내용</label>
          <textarea name="content" className="w-full p-3 text-slate-900 rounded-xl border border-slate-200 focus:outline-indigo-600 text-sm" required></textarea>
        </div>

        <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-xl 
          font-bold hober:bg-indigo-700 active:scale-95 transition-all shadow-md shadow-indigo-100">
          서버로 전송하기
        </button>
      </form>
    </div>
  );
}