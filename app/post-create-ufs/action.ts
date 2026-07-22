"use server";

export async function createPostAction(formData: FormData) {
  // 로딩 상태를 확실히 눈으로 보기 위해 2초간 강제로 서버
  // 지연을 발생시킵니다.
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const title = formData.get("title");
  const content = formData.get("content");
  
  console.log("----- 서버 호출 -----")
  console.log("title:", title);
  console.log("content:", content);
}