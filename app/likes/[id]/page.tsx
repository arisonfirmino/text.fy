import PageTitle from "@/app/components/page-title";
import LikesClient from "./components/likes-client";
import { db } from "@/app/lib/prisma";

interface LikesPageProps {
  params: {
    id: string;
  };
}

export default async function Likes({ params }: LikesPageProps) {
  const { id } = params;

  const user = await db.user.findFirst({
    where: {
      id: id,
    },
    include: {
      postsLiked: {
        include: {
          post: true,
        },
      },
    },
  });

  if (!user) {
    return <div>Post não encontrado.</div>;
  }

  const liked_posts = user.postsLiked.map((like) => like.post);

  return (
    <>
      <div className="px-5 pt-5">
        <PageTitle>Publicações curtidas</PageTitle>
      </div>

      <LikesClient posts={liked_posts} />
    </>
  );
}
