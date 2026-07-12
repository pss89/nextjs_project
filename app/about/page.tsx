import Link from 'next/link';

export default function About() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
            <Link href="/" className="bg-rose-50 text-rose-600 px-4 py-2 rounded-full text-sm font-:semibold active:scale-95 transition-all hover:bg-rose-100">
                Home
            </Link>
        </div>
    );
}