"use server";

import { db } from "../lib/prisma";
import { revalidatePath } from "next/cache";

export const followUser = async ({
  followerId,
  followingId,
}: {
  followerId: string;
  followingId: string;
}) => {
  if (!followerId || !followingId) {
    throw new Error("Erro.");
  }

  const existingFollow = await db.follow.findUnique({
    where: {
      followerId_followingId: {
        followerId,
        followingId,
      },
    },
  });

  if (existingFollow) {
    await db.follow.delete({
      where: {
        followerId_followingId: {
          followerId,
          followingId,
        },
      },
    });
  } else {
    await db.follow.create({
      data: {
        followerId,
        followingId,
      },
    });
  }

  revalidatePath("/");
};
