"use server";

import { db } from "../lib/prisma";
import { revalidatePath } from "next/cache";

interface createNewPostProps {
  userId: string;
  text: string;
}

export const createNewPost = async ({ userId, text }: createNewPostProps) => {
  if (!userId || !text) {
    throw new Error("Campos não preenchidos.");
  }

  await db.post.create({
    data: {
      userId,
      text,
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

export const deleteAllPosts = async ({ userId }: { userId: string }) => {
  if (!userId) {
    throw new Error("Usuário não encontrado.");
  }

  const posts = await db.post.findMany({
    where: {
      userId: userId,
    },
  });

  if (posts.length === 0) {
    throw new Error("Nenhum post encontrado para o usuário.");
  }

  await db.comment.deleteMany({
    where: {
      postId: {
        in: posts.map((post) => post.id),
      },
    },
  });

  await db.post.deleteMany({
    where: {
      userId: userId,
    },
  });

  revalidatePath("/");
};
