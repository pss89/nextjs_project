"use server";

import { redirect } from "next/navigation"; // 리다이렉트 처리
import { revalidatePath } from "next/cache"; // 캐시 갱싱

export async function createPostAction(formData: FormData) {
  // 로딩 상태를 확실히 눈으로 보기 위해 2초간 강제로 서버
  // 지연을 발생시킵니다.
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const title = formData.get("title");
  const content = formData.get("content");
  
  console.log("----- 서버 호출 -----")
  console.log("title:", title);
  console.log("content:", content);

  revalidatePath("/blog"); // /blog 경로를 캐시 갱신
  
  redirect("/blog"); // /blog 경로로 리다이렉트
}