"use client";

import { useSession } from "next-auth/react";
import RedirectLogin from "@/app/components/redirect-login";
import { Post as PostType, User } from "@prisma/client";
import Post from "@/app/components/post";
import LikeButton from "@/app/components/action_buttons/like-button";

interface LikesClientProps {
  posts: (PostType & {
    user: User;
  })[];
}

export default function LikesClient({ posts }: LikesClientProps) {
  const { data } = useSession();

  return (
    <>
      {data?.user ? (
        <div className="flex flex-col gap-5 px-5 py-5">
          {posts.map((post) => (
            <div key={post.id} className="relative">
              <Post post={post} />

              <span className="absolute -bottom-1.5 -left-1.5">
                <LikeButton id={post.id} />
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="px-5 pt-5">
          <RedirectLogin />
        </div>
      )}
    </>
  );
}
