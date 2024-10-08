"use client";

import { useSession } from "next-auth/react";
import { PostProps } from "../types";
import { DotIcon } from "lucide-react";
import Image from "next/image";
import { formatTimeAgo } from "../helpers/date";
import DeletePost from "./delete-post";
import FollowButton from "./follow-button";

const Post = ({ post }: PostProps) => {
  const { data } = useSession();

  return (
    <div className="relative flex w-full gap-2.5 rounded-xl bg-white p-2.5 shadow-sm">
      <Image
        src={post.user.image ?? ""}
        alt={post.user.name ?? ""}
        height={1024}
        width={1024}
        className="h-10 w-10 rounded-full"
      />

      <div>
        <div className="flex items-center">
          <h3 className="text-base font-medium">{post.user.name}</h3>
          <DotIcon size={16} className="text-gray-400" />
          <span className="text-xs text-gray-400">
            {formatTimeAgo(new Date(post.created_at))}
          </span>
        </div>

        <p className="text-sm">{post.text}</p>
      </div>

      {data?.user.email === post.user.email ? (
        <DeletePost id={post.id} />
      ) : (
        <FollowButton user={post.user} />
      )}
    </div>
  );
};

export default Post;
