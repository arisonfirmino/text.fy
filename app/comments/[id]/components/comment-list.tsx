import { DotIcon } from "lucide-react";
import Image from "next/image";
import { formatTimeAgo } from "@/app/helpers/date";
import { Comment } from "@prisma/client";

interface CommentListProps {
  comments: Comment[];
}

export default function CommentList({ comments }: CommentListProps) {
  return (
    <>
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="flex gap-2.5 rounded-xl bg-white p-2.5 shadow-sm"
        >
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
        </div>
      ))}
    </>
  );
}
