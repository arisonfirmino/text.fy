import Image from "next/image";
import { Prisma } from "@prisma/client";
import { DotIcon } from "lucide-react";
import { formatTimeAgo } from "@/app/helpers/date";
import ActionButtons from "@/app/components/action_buttons/action-buttons";

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
      <div className="flex gap-2.5 rounded-xl bg-white p-2.5 shadow-sm">
        <Image
          src={post.image ?? ""}
          alt={post.name}
          height={1024}
          width={1024}
          className="h-10 w-10 rounded-full"
        />

        <div>
          <div className="flex items-center">
            <h3 className="text-base font-medium">{post.name}</h3>
            <DotIcon size={16} className="text-gray-400" />
            <span className="text-xs text-gray-400">
              {formatTimeAgo(new Date(post.created_at))}
            </span>
          </div>

          <p className="text-sm">{post.text}</p>
        </div>
      </div>

      <ActionButtons
        id={post.id}
        likes={post.likes}
        comments_length={post.comments.length}
      />
    </div>
  );
}
