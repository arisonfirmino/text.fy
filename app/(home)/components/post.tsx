import { Prisma } from "@prisma/client";
import { DotIcon } from "lucide-react";
import Image from "next/image";
import ActionButtons from "./action-buttons";
import { formatTimeAgo } from "@/app/helpers/date";

interface PostProps {
  post: Prisma.PostGetPayload<{}>;
}

export default function Post({ post }: PostProps) {
  return (
    <div className="flex flex-col gap-1.5 border-b border-solid border-black pb-2.5">
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

      <ActionButtons />

      <span className="text-xs">
        curtido por <span className="font-medium">Arison Firmino</span> e outras{" "}
        <span className="font-medium">5</span> pessoas
      </span>
    </div>
  );
}
