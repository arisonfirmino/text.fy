import { Like } from "@prisma/client";

export const getLikeText = (
  likedBy: (Like & { user: { name: string | null } })[],
  likes: number,
): string => {
  if (likes === 0) {
    return "seja o primeiro a curtir essa publicação";
  }

  const userNames = likedBy
    .map((like) => like.user.name)
    .filter((name) => name !== null)
    .map((name) => name as string)
    .slice(0, 2);

  if (likes === 1) {
    return `curtido por ${userNames[0]}`;
  }

  if (likes === 2) {
    return `curtido por ${userNames[0]} e mais ${likes - 1} pessoa`;
  }

  return `curtido por ${userNames[0]} e outras ${likes - 1} pessoas`;
};
