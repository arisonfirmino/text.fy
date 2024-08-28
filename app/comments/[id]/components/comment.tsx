"use client";

import { useSession } from "next-auth/react";
import { Comment as CommentType } from "@prisma/client";
import { DotIcon } from "lucide-react";
import Image from "next/image";
import { formatTimeAgo } from "@/app/helpers/date";
import DeleteComment from "./delete-comment";

interface CommentProps {
  comment: CommentType;
}

export default function Comment({ comment }: CommentProps) {
  const { data } = useSession();

  return (
    <div className="relative flex w-full gap-2.5 rounded-xl bg-white p-2.5 shadow-sm">
      <Image
        src={comment.image ?? ""}
        alt={comment.name}
        height={1024}
        width={1024}
        className="h-10 w-10 rounded-full"
      />

      <div>
        <div className="flex items-center">
          <h3 className="text-base font-medium">{comment.name}</h3>
          <DotIcon size={16} className="text-gray-400" />
          <span className="text-xs text-gray-400">
            {formatTimeAgo(new Date(comment.created_at))}
          </span>
        </div>

        <p className="text-sm">{comment.text}</p>
      </div>

      {data?.user.email === comment.email && <DeleteComment id={comment.id} />}
    </div>
  );
}
