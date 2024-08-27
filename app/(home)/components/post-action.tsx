import { Prisma } from "@prisma/client";
import ActionButtons from "./action-buttons";
import Post from "@/app/components/post";

interface PostProps {
  post: Prisma.PostGetPayload<{
    include: {
      comments: true;
    };
  }>;
}

export default function PostAction({ post }: PostProps) {
  return (
    <div className="flex flex-col gap-1.5 border-b border-solid border-black pb-2.5">
      <Post post={post} />

      <ActionButtons
        id={post.id}
        likes_length={post.likes}
        comments_length={post.comments.length}
      />

      <span className="text-xs">
        curtido por <span className="font-medium">Arison Firmino</span> e outras{" "}
        <span className="font-medium">5</span> pessoas
      </span>
    </div>
  );
}
