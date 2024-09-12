"use client";

import { useState } from "react";
import { LoaderCircleIcon, Trash2Icon } from "lucide-react";
import { deleteComment } from "@/app/actions/comment";

export default function DeleteComment({ id }: { id: string }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDeleteClick = async () => {
    setIsLoading(true);

    try {
      await deleteComment({ id });
    } catch (error) {
      console.error("Failed to delete the post", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleDeleteClick}
      className="absolute right-1 top-1 rounded-full bg-red-300 p-1 text-xs text-red-600 active:bg-black active:text-white"
    >
      {isLoading ? (
        <LoaderCircleIcon size={12} className="animate-spin" />
      ) : (
        <Trash2Icon size={12} />
      )}
    </button>
  );
}
