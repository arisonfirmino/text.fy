"use client";

import { useRouter } from "next/navigation";
import { Trash2Icon } from "lucide-react";
import { deletePost } from "../actions/post";

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter();

  const handleDeleteClick = async () => {
    await deletePost({ id }).then(() => {
      router.push("/");
    });
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
