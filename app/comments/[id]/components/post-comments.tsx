import { Post as PostType, User, Comment } from "@prisma/client";
import ActionButtons from "@/app/components/action_buttons/action-buttons";
import Post from "@/app/components/post";

interface PostCommentsProps {
  post: PostType & {
    user: User;
    comments: Comment[];
  };
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
