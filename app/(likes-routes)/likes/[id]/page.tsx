import PageTitle from "@/app/components/page-title";
import { db } from "@/app/lib/prisma";
import { notFound } from "next/navigation";
import Post from "@/app/components/post";
import LikeButton from "@/app/components/action_buttons/like-button";

interface LikesPageProps {
  params: {
    id: string;
  };
}

const Likes = async ({ params }: LikesPageProps) => {
  const { id } = params;

  const user = await db.user.findFirst({
    where: {
      id: id,
    },
    include: {
      postsLiked: {
        include: {
          post: {
            include: {
              user: true,
            },
          },
        },
      },
    },
  });

  if (!user) {
    return notFound();
  }

  const liked_posts = user.postsLiked.map((like) => like.post);

  return (
    <>
      <div className="px-5 pt-5">
        <PageTitle>Publicações curtidas</PageTitle>
      </div>

      <div className="space-y-5 px-5 pt-5">
        {liked_posts.map((post) => (
          <div key={post.id} className="relative">
            <Post post={post} />
            <span className="absolute -bottom-1.5 -left-1.5">
              <LikeButton id={post.id} />
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Likes;
