import { Post as PostType } from "@prisma/client";
import { DotIcon } from "lucide-react";
import Image from "next/image";
import { formatTimeAgo } from "../helpers/date";

interface PostProps {
  post: PostType;
}

export default function Post({ post }: PostProps) {
  return (
    <div className="flex w-full gap-2.5 rounded-xl bg-white p-2.5 shadow-sm">
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
  );
}
