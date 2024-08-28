"use server";

import { db } from "../lib/prisma";
import { revalidatePath } from "next/cache";

interface createNewPostProps {
  name: string;
  email: string;
  text: string;
  image?: string;
}

export const createNewPost = async ({
  name,
  email,
  text,
  image,
}: createNewPostProps) => {
  if (!name || !email || !text) {
    throw new Error("Campos não preenchidos.");
  }

  await db.post.create({
    data: {
      name,
      email,
      text,
      image,
    },
  });

  revalidatePath("/");
};

export const deletePost = async ({ id }: { id: string }) => {
  if (!id) {
    throw new Error("Falha na solicitação.");
  }

  const post = await db.post.findFirst({
    where: {
      id: id,
    },
  });

  if (!post) {
    throw new Error("Post não encontrado.");
  }

  await db.comment.deleteMany({
    where: {
      postId: post.id,
    },
  });

  await db.post.delete({
    where: {
      id: post.id,
    },
  });

  revalidatePath("/");
};
