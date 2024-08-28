"use client";

import { useRouter } from "next/navigation";
import { Trash2Icon } from "lucide-react";
import { deleteComment } from "@/app/actions/comment";

export default function DeleteComment({ id }: { id: string }) {
  const router = useRouter();

  const handleDeleteClick = async () => {
    await deleteComment({ id });
  };

  return (
    <button
      onClick={handleDeleteClick}
      className="absolute right-1 top-1 rounded-full bg-red-300 p-1 text-xs text-red-600 active:bg-black active:text-white"
    >
      <Trash2Icon size={12} />
    </button>
  );
}
