import { createPostAction } from "./action";
import SubmitButton from "./SubmitButton";

export default function PostCreatePage() {
  // title, content 값이 없으면 전송 안되도록 처리
  if (typeof window !== "undefined") {
    const form = document.querySelector("form");
    form?.addEventListener("submit", (e) => {
      const title = (form.querySelector("input[name=title]") as HTMLInputElement).value;
      const content = (form.querySelector("textarea[name=content]") as HTMLTextAreaElement).value;

      if (!title || !content) {
        e.preventDefault();
        alert("제목과 내용을 모두 입력해주세요.");
      }
    });
  }

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

        <SubmitButton />
      </form>
    </div>
  );
}