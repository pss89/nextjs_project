import Image from "next/image";
import { triggerCacheBoom } from "./action";

export default async function SWRTest() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random", {
    cache: "force-cache", // 캐시를 강제로 사용하여 데이터를 가져옵니다. 이 옵션은 서버 측에서 데이터를 가져올 때 캐시된 데이터를 우선적으로 사용하도록 합니다.
    next: { tags : ["dogs-data"] } // "dogs-data" 태그를 사용하여 이 데이터를 캐싱합니다. 이 태그는 나중에 revalidateTag를 통해 캐시를 무효화할 때 사용됩니다.
  });

  const data = await response.json();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-3xl shadow-3xl border text-center">
      <div className="relative mx-auto w-[320px] h-[240px]">
        <Image
          src={data.message}
          alt="cache dog"
          loading="eager"
          fill
          sizes="320px"
          style={{ borderRadius: "8px", objectFit: "cover"}}
        />
      </div>
      <form action={triggerCacheBoom}>
        <button className="mt-3 w-full bg-rose-600 text-white py-3 rounded-xl 
          font-bold hover:bg-rose-700 active:scale-95 transition-all shadow-mb">
          💥 즉시 캐시 폭파하기 (데이터갱신)
        </button>
      </form>
    </div>
  );
}