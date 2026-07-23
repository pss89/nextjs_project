// 상호작용과 훅을 사용하므로 클라이언트 컴포넌트로 사용
"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-full py-3 rounded-xl font-bold transition-all shadow-md
        ${pending ? "bg-slate-300 text-slate-500 cursor-not-allowed animate-pulse"
            : "bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95 shadow-indigo-100"
        }`}>
        {pending ? "🚀 서버로 전송하는 중..." : "서버로 전송하기"}
    </button>
  );
}