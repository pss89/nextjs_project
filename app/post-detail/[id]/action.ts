"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deletePostAction(postId: number) {
  try {
    await prisma.post.delete({
      where: { id: postId }
    })

  } catch (error) {
    console.error("삭제중 에러 발생", error);
    throw new Error("게시물을 삭제하는데 실패했습니다.");
  }

  revalidatePath("/post-list"); // 글목록 페이지를 새로고침하여 최신 데이터를 가져오도록 합니다.
  redirect("/post-list"); // 삭제 후 글목록 페이지로 리다이렉트
}

export async function updatePostAction(postId: number, formData: FormData) {
  const title = formData.get("title") as string; // type 단언 (assertion)
  const content = formData.get("content") as string;

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

  try {
    await prisma.post.update({
      where: { id: postId },
      data: { 
        title: title, 
        content: content
      }
    })

    console.log("db 게시글 업데이트 성공"+postId);
  } catch (error) {
    console.error("글 수정중 에러 발생", error);
    // return { error: "글을 수정하는 중 오류가 발생했습니다.", success: false }
    throw new Error("글을 수정하는 중 오류가 발생했습니다.");
  }

  revalidatePath("/post-list"); // 글목록 페이지를 새로고침하여 최신 데이터를 가져오도록 합니다.
  revalidatePath("/post-detail/" + postId); // 글 상세 페이지를 새로고침하여 최신 데이터를 가져오도록 합니다.
  redirect("/post-detail/" + postId); // 수정 후 글 상세 페이지로 리다이렉트
}