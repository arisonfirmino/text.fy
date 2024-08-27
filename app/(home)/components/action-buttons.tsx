"use client";

import { useSession } from "next-auth/react";
import { HeartIcon, MessageSquareIcon, Share2Icon } from "lucide-react";
import Link from "next/link";
import { addLike } from "@/app/actions/like";

interface ActionButtonsProps {
  id: string;
  likes_length: any;
  comments_length: number;
}

export default function ActionButtons({
  id,
  likes_length,
  comments_length,
}: ActionButtonsProps) {
  const { data } = useSession();

  const handleLikeClick = async () => {
    if (data?.user?.id) {
      await addLike({ userId: data.user.id, postId: id });
    } else {
      console.error("User is not logged in");
    }
  };

  return (
    <div className="flex items-center gap-5">
      <button
        onClick={handleLikeClick}
        className="flex items-center gap-1.5 text-sm"
      >
        <HeartIcon size={16} /> {likes_length}
      </button>

      {data?.user ? (
        <Link
          href={`/comments/${id}`}
          className="flex items-center gap-1.5 text-sm"
        >
          <MessageSquareIcon size={16} /> {comments_length}
        </Link>
      ) : (
        <span className="flex cursor-not-allowed items-center gap-1.5 text-sm">
          <MessageSquareIcon size={16} /> {comments_length}
        </span>
      )}

      <button>
        <Share2Icon size={16} />
      </button>
    </div>
  );
}
