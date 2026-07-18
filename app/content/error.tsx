"use client";

import { useEffect, startTransition } from "react";
import { useRouter } from "next/navigation";

export default function ContentError({
    error,
    reset,
}: Readonly<{
    error : Error & {digest?: string}; // error 객체에는 에러 메시지와 digest 속성이 포함되어 있음
    reset : () => void; // reset() 함수를 호출하면 에러 상태를 초기화하고 다시 시도할 수 있음
}>) {
    const router = useRouter();

    useEffect(() => {
        console.error("포착된 에러 내용:",error);
    },[error]);

    const handleRetry = () => {
        startTransition(() => {
            router.refresh(); // 페이지를 새로고침하여 데이터를 다시 가져오도록 함
            reset();
        })
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-8 text-center bg-rose-50 rounded-3xl border border-rose-100 shadow-lg">
            <span className="text-4xl">⚠️</span>
            <h2 className="text-xl font-bold text-rose-700 mt-4 mb-2">
                데이터를 불러오지 못했습니다.
            </h2>
            <p className="text-sm text-rose-600/80 mt-4 mb-2">
                시스템에 일시적인 오류가 발생했거나 점검 중일 수 있습니다.
            </p>
            <button onClick={handleRetry} 
                    className="bg-rose-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-rose-700 active:scale-95 transition-all shadow-md">
                🔄 다시 시도하기
            </button>
        </div>
    )
}