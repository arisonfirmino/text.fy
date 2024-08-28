import { Prisma } from "@prisma/client";
import ActionButtons from "@/app/components/action_buttons/action-buttons";
import Post from "@/app/components/post";

interface PostCommentsProps {
  post: Prisma.PostGetPayload<{
    include: {
      comments: true;
    };
  }>;
}

export default function PostComments({ post }: PostCommentsProps) {
  return (
    <div className="flex flex-col gap-2.5">
      <Post post={post} />

      <ActionButtons
        id={post.id}
        likes={post.likes}
        comments_length={post.comments.length}
      />
    </div>
  );
}
