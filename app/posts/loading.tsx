export default function PostLoading() {
    return (
        <div className="max-w-xl mx-auto mt-10 p-6 text-center space-y-4">
            <div className="w-10 h-10 border-4 border-slate-200 border-t-indigo-600 rounded-full animate-spin mx-auto"></div>
            <p className="text-slate-500 font-medium animate-pulse">
                서버에서 최신 데이터를 불러오는 중입니다...
            </p>
            <div className="space-y-3 mt-6">
                <div className="h-12 bg-slate-200/70 rounded-2xl animate-pulse"></div>
                <div className="h-12 bg-slate-200/70 rounded-2xl animate-pulse"></div>
                <div className="h-12 bg-slate-200/70 rounded-2xl animate-pulse"></div>
            </div>
        </div>
    )
}