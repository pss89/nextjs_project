"use server";

import { prisma } from "../../lib/prisma";

// prevState : 이전 상태값, formData : form submit 시 전달되는 데이터
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

  try { 
    await prisma.post.create({
      data: {
        title: title.trim(),
        content: content?.trim() || null
      }
    })
  } catch (error) {
    console.error("failed to create post:", error);
    return { error: "글을 등록하는 중 오류가 발생했습니다.", success: false }
  }

  return {
    success : true,
    message : "🎉 게시물이 성공적으로 생성되었습니다!"
  };
}