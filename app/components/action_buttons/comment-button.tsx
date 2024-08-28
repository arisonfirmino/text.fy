"use client";

import { signIn, useSession } from "next-auth/react";
import { MessageSquareIcon } from "lucide-react";
import Link from "next/link";

export default function CommentButton({
  id,
  comments_length,
}: {
  id: string;
  comments_length: number;
}) {
  const { data } = useSession();
  const handleLogInClick = () => signIn("google");

  return (
    <>
      {data?.user ? (
        <Link
          href={`/comments/${id}`}
          className="flex items-center gap-1.5 text-sm"
        >
          <MessageSquareIcon size={16} /> {comments_length}
        </Link>
      ) : (
        <button
          onClick={handleLogInClick}
          className="flex items-center gap-1.5 text-sm"
        >
          <MessageSquareIcon size={16} /> {comments_length}
        </button>
      )}
    </>
  );
}
