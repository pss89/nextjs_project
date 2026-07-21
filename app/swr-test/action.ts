"use server"; // This is a server component

// revalidateTag는 특정 태그를 기반으로 캐시를 무효화하고 데이터를 다시 가져오는 데 사용됩니다. 
// 이 기능은 Next.js에서 서버 측 렌더링과 클라이언트 측 데이터 페칭을 효율적으로 관리하는 데 유용합니다. 
// revalidateTag를 사용하면 특정 데이터 변경 시 해당 태그와 관련된 캐시를 무효화하여 최신 데이터를 가져올 수 있습니다.
import { revalidateTag } from "next/cache";

export async function triggerCacheBoom() {
  revalidateTag("dogs-data", "max");
}