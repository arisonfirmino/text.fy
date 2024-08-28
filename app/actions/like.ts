"use server";

import { db } from "../lib/prisma";

export const addLike = async ({
  userId,
  postId,
}: {
  userId: string;
  postId: string;
}) => {
  const user = await db.user.findFirst({
    where: {
      id: userId,
    },
  });

  const post = await db.post.findFirst({
    where: {
      id: postId,
    },
  });

  if (!user || !post) {
    throw new Error("Dados não encontrados.");
  }

  const existingLike = await db.like.findFirst({
    where: {
      userId,
      postId,
    },
  });

  if (existingLike) {
    await db.like.delete({
      where: {
        id: existingLike.id,
      },
    });

    await db.post.update({
      where: {
        id: postId,
      },
      data: {
        likes: {
          decrement: 1,
        },
      },
    });

    return { liked: false };
  } else {
    await db.like.create({
      data: {
        userId,
        postId,
      },
    });

    await db.post.update({
      where: {
        id: postId,
      },
      data: {
        likes: {
          increment: 1,
        },
      },
    });

    return { liked: true };
  }
};

export const checkIfPostLikedByUser = async (
  postId: string,
  userId: string,
): Promise<boolean> => {
  const like = await db.like.findFirst({
    where: {
      postId: postId,
      userId: userId,
    },
  });

  return !!like;
};
