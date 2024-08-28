import { Prisma } from "@prisma/client";
import ActionButtons from "../../components/action_buttons/action-buttons";
import Post from "@/app/components/post";
import { getLikeText } from "@/app/helpers/likeText";

interface PostProps {
  post: Prisma.PostGetPayload<{
    include: {
      comments: true;
      likedBy: {
        include: {
          user: true;
        };
      };
    };
  }>;
}

export default function PostAction({ post }: PostProps) {
  return (
    <div className="flex flex-col gap-1.5 border-b border-solid border-black pb-2.5">
      <Post post={post} />

      <ActionButtons
        id={post.id}
        likes={post.likes}
        comments_length={post.comments.length}
      />

      <span className="text-xs">{getLikeText(post.likedBy, post.likes)}</span>
    </div>
  );
}
