import Link from 'next/link';
import Image from 'next/image';

import profilePic from '@/public/avatar.png'

import LikeButton from '@/app/components/LikeButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-3xl shadow-xl max-w-sm w-full text-center border border-slate-100">
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-md mb-4">
          <Image src={profilePic} alt="프로필 사진" width={96} height={96} />
        </div>
        <h1 className="text-2xl font-bold text-slate-800">부쳇</h1>
        <p className="text-sm text-indigo-600 font-medium mb-6">웹개발자</p>
        
        <LikeButton />

        <div className="mt-6 space-y-3">
          <Link href="https://github.com" className="block bg-slate-900 text-white py-3 rounded-xl font-medium active:scale-95 transition-all hover:bg-slate-800">GitHub 방문하기</Link>
          <Link href="/about" className="block bg-slate-100 text-slate-700 py-3 rounded-xl font-medium active:scale-95 transition-all hover:bg-slate-200">포트폴리오 상세보기</Link>
        </div>
      </div>
    </div>
  );
}