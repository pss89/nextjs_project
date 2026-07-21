"use server";

export async function createPostAction(formData: FormData) {
  const title = formData.get("title");
  const content = formData.get("content");

  console.log("----- 서버 호출 -----")
  console.log("title:", title);
  console.log("content:", content);
}