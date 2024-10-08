"use server";

import { db } from "../lib/prisma";

export const isFollowing = async (
  followerId: string,
  followingId: string,
): Promise<boolean> => {
  const existingFollow = await db.follow.findUnique({
    where: {
      followerId_followingId: {
        followerId,
        followingId,
      },
    },
  });

  return !!existingFollow;
};
