import { db } from "@/app/lib/prisma";
import PostComments from "./components/post-comments";
import PageTitle from "@/app/components/page-title";
import CommentList from "./components/comment-list";
import FormComment from "./components/form-comment";

interface CommentsPageProps {
  params: {
    id: string;
  };
}

export default async function Comments({ params }: CommentsPageProps) {
  const { id } = params;

  const post = await db.post.findFirst({
    where: {
      id: id,
    },
    include: {
      comments: {
        orderBy: {
          created_at: "desc",
        },
      },
    },
  });

  if (!post) {
    return <div>Post não encontrado.</div>;
  }

  return (
    <>
      <div className="px-5 pt-5">
        <PageTitle>Publicação de {post.name}</PageTitle>
      </div>

      <div className="px-5 pt-5">
        <PostComments post={post} />
      </div>

      <div className="px-5 pt-5">
        <PageTitle>Comentários</PageTitle>
      </div>

      <div className="flex flex-col gap-5 px-5 pb-32 pt-5">
        <CommentList comments={post.comments} />
      </div>

      <FormComment id={id} />
    </>
  );
}
