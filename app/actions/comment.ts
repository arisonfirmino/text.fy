"use server";

import { db } from "../lib/prisma";
import { revalidatePath } from "next/cache";

interface createNewCommentProps {
  postId: string;
  name: string;
  email: string;
  image?: string;
  text: string;
}

export const createNewComment = async ({
  postId,
  name,
  email,
  text,
  image,
}: createNewCommentProps) => {
  const post = await db.post.findFirst({
    where: {
      id: postId,
    },
  });

  if (!post) {
    throw new Error("Post não encontrado.");
  }

  await db.comment.create({
    data: {
      postId,
      name,
      email,
      image,
      text,
    },
  });

  revalidatePath("/");
};

export const deleteComment = async ({ id }: { id: string }) => {
  if (!id) {
    throw new Error("Falha na solicitação.");
  }

  const comment = await db.comment.findFirst({
    where: {
      id: id,
    },
  });

  if (!comment) {
    throw new Error("Comentário não encontrado.");
  }

  await db.comment.delete({
    where: {
      id: comment.id,
    },
  });

  revalidatePath("/");
};
