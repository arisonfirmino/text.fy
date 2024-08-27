"use server";

import { db } from "../lib/prisma";

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
};
