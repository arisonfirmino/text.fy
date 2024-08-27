"use server";

import { db } from "../lib/prisma";

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
};
