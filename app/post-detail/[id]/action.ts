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

  revalidatePath("/"); // 페이지를 새로고침하여 최신 데이터를 가져오도록 합니다.
  redirect("/post-list"); // 삭제 후 글목록 페이지로 리다이렉트
}