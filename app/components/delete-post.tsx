"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoaderCircleIcon, Trash2Icon } from "lucide-react";
import { deletePost } from "../actions/post";

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDeleteClick = async () => {
    setIsLoading(true);

    try {
      await deletePost({ id });
    } catch (error) {
      console.error("Failed to delete the post", error);
    } finally {
      setIsLoading(false);
      router.push("/");
    }
  };

  return (
    <button
      onClick={handleDeleteClick}
      disabled={isLoading}
      className="absolute right-1 top-1 rounded-full bg-red-300 p-1 text-xs text-red-600 active:bg-black active:text-white"
    >
      {isLoading ? (
        <LoaderCircleIcon size={16} className="animate-spin" />
      ) : (
        <Trash2Icon size={12} />
      )}
    </button>
  );
}
