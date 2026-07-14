export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-slate-100 flex flex-col items-center justify-center">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-black text-indigo-600 tracking-wider">
                    My-Logo
                </h1>
                <p className="text-sm text-slate-400 mt-1">
                    안전하고 빠른 서비스
                </p>
            </div>

            <main className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-slate-200/60">
                {children}
            </main>
        </div>
    )
}