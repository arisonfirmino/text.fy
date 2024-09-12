"use client";

import { signIn, useSession } from "next-auth/react";
import { MessageCircleIcon } from "lucide-react";
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
          <MessageCircleIcon size={16} />
        </Link>
      ) : (
        <button
          onClick={handleLogInClick}
          className="flex items-center gap-1.5 text-sm"
        >
          <MessageCircleIcon size={16} />
        </button>
      )}
    </>
  );
}
