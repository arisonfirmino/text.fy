import { db } from "@/app/lib/prisma";
import PageTitle from "@/app/components/page-title";
import CommentList from "../components/comment-list";
import FormComment from "../components/form-comment";
import Post from "@/app/components/post";
import ActionButtons from "@/app/components/action_buttons/action-buttons";

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
      user: true,
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
        <PageTitle>Publicação de {post.user.name}</PageTitle>
      </div>

      <div className="space-y-2.5 px-5 pt-5">
        <Post post={post} />

        <ActionButtons
          id={post.id}
          likes={post.likes}
          comments_length={post.comments.length}
        />
      </div>

      <div className="px-5 pt-5">
        <PageTitle>Comentários</PageTitle>
      </div>

      <div className="flex flex-col gap-5 px-5 pb-32 pt-5">
        <CommentList comments={post.comments} />
      </div>

      <div className="fixed bottom-0 left-1/2 w-full max-w-[598px] -translate-x-1/2 transform bg-container px-5 pb-24 pt-1 md:pb-5">
        <FormComment id={id} />
      </div>
    </>
  );
}
