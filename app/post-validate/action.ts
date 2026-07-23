"use server";

export async function createPostWithValidation(prevState : any,  formData: FormData) {
  const title = formData.get("title") as string; // type 단언 (assertion)
  const content = formData.get("content") as string; // type 단언 (assertion)

  if (!title || title.length < 2) {
    return {
      success: false,
      message: "❌ 제목은 최소 2글자 이상 입력하셔야 합니다!"
    };
  }

  if (!content || content.length < 5) {
    return {
      success: false,
      message: "❌ 내용은 최소 5글자 이상 입력하셔야 합니다!"
    };
  }

  console.log("----- 서버 호출 -----")
  console.log("title:", title);
  console.log("content:", content);

  return {
    success : true,
    message : "🎉 게시물이 성공적으로 생성되었습니다!"
  };
}