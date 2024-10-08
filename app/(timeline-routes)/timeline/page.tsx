import { db } from "@/app/lib/prisma";
import PostsTimeline from "./components/posts-timeline";
import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

const fetch = async () => {
  const getPosts = await db.post.findMany({
    include: {
      user: true,
      comments: true,
      likedBy: {
        include: {
          user: true,
        },
        orderBy: {
          created_at: "desc",
        },
      },
    },
    orderBy: {
      created_at: "desc",
    },
  });

  const [posts] = await Promise.all([getPosts]);

  return { posts };
};

async function getFollowedUserIds(userId: string) {
  const followingIds = await db.follow.findMany({
    where: {
      followerId: userId,
    },
    select: {
      followingId: true,
    },
  });

  return followingIds.map((follow) => follow.followingId);
}

const Timeline = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    return notFound();
  }

  const { posts } = await fetch();

  const followedUserIds = await getFollowedUserIds(session.user.id);

  const filteredPosts = posts.filter((post) =>
    followedUserIds.includes(post.userId),
  );

  return <PostsTimeline posts={posts} filteredPosts={filteredPosts} />;
};

export default Timeline;
