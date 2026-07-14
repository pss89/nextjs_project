export default function LoginPage() {
    return (
        <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
                로그인
            </h2>
            <input type="text" placeholder="이메일" className="w-full p-3 rounded-xl border mb-3 text-sm" />
            <input type="password" placeholder="비밀번호" className="w-full p-3 rounded-xl border mb-3 text-sm" />
            <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">
                로그인하기
            </button>
        </div>
    );
}