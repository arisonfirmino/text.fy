"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { addLike, checkIfPostLikedByUser } from "@/app/actions/like";
import { HeartIcon, LoaderCircleIcon } from "lucide-react";

export default function LikeButton({
  id,
  likes,
}: {
  id: string;
  likes?: number;
}) {
  const { data } = useSession();

  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchLikeStatus = async () => {
      if (data?.user?.id) {
        const liked = await checkIfPostLikedByUser(id, data.user.id);
        setIsLiked(liked);
      }
    };

    fetchLikeStatus();
  }, [id, data?.user?.id]);

  const handleLikeClick = async () => {
    if (data?.user?.id) {
      setIsLoading(true);

      try {
        await addLike({ userId: data.user.id, postId: id });
        setIsLiked(true);
      } catch (error) {
        console.error("Failed to like the post", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <button
      onClick={handleLikeClick}
      disabled={!data?.user || isLoading}
      className={`flex items-center gap-1.5 text-sm ${!data?.user || isLoading ? "cursor-not-allowed" : ""}`}
    >
      {isLoading ? (
        <LoaderCircleIcon size={16} className="animate-spin" />
      ) : (
        <HeartIcon size={16} className={isLiked ? "fill-red-600" : ""} />
      )}
    </button>
  );
}
