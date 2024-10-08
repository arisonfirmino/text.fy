"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { followUser } from "../actions/follow";
import { FollowButtonProps } from "../types";
import { UserCheckIcon, UserXIcon } from "lucide-react";
import { isFollowing } from "../helpers/followStatus";

const FollowButton = ({ user }: FollowButtonProps) => {
  const { data: session } = useSession();
  const [isUserFollowing, setIsUserFollowing] = useState<boolean>(false);

  useEffect(() => {
    const checkFollowing = async () => {
      if (session?.user.id && user.id) {
        const isFollowingUser = await isFollowing(session.user.id, user.id);
        setIsUserFollowing(isFollowingUser);
      }
    };

    checkFollowing();
  }, [session?.user.id, user.id]);

  const handleFollowClick = async () => {
    if (session?.user.id && user.id) {
      await followUser({
        followerId: session.user.id,
        followingId: user.id,
      });

      setIsUserFollowing((prev) => !prev);
    }
  };

  return (
    <button
      onClick={handleFollowClick}
      className={`absolute right-1 top-1 rounded-full border border-solid p-1 text-xs ${isUserFollowing ? "border-green-500 text-green-500" : "border-foreground text-foreground"}`}
    >
      {isUserFollowing ? <UserCheckIcon size={12} /> : <UserXIcon size={12} />}
    </button>
  );
};

export default FollowButton;
