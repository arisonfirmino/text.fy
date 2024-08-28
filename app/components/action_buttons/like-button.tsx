"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { addLike, checkIfPostLikedByUser } from "@/app/actions/like";
import { HeartIcon } from "lucide-react";

export default function LikeButton({
  id,
  likes,
}: {
  id: string;
  likes?: number;
}) {
  const { data } = useSession();

  const [isLiked, setIsLiked] = useState<boolean>(false);

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
      await addLike({ userId: data.user.id, postId: id });
    } else {
      console.error("User is not logged in");
    }
  };

  return (
    <button
      onClick={handleLikeClick}
      className="flex items-center gap-1.5 text-sm"
    >
      <HeartIcon size={16} className={isLiked ? "fill-red-600" : ""} /> {likes}
    </button>
  );
}
