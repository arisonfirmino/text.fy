"use client";

import { useSession } from "next-auth/react";
import { Post as PostType, Comment, Like, User } from "@prisma/client";
import Post from "@/app/components/post";
import ActionButtons from "@/app/components/action_buttons/action-buttons";
import { getLikeText } from "@/app/helpers/likeText";
import { motion } from "framer-motion";

export interface PostsListProps {
  posts: (PostType & {
    user: User;
    comments: Comment[];
    likedBy: (Like & { user: User })[];
  })[];
}

export default function PostsList({ posts }: PostsListProps) {
  const { data } = useSession();

  return (
    <>
      {posts.map((post, index) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
          key={post.id}
          className="flex flex-col gap-1.5 border-b border-solid border-black pb-2.5"
        >
          <Post post={post} />

          <ActionButtons
            id={post.id}
            likes={post.likes}
            comments_length={post.comments.length}
          />

          {data?.user && (
            <span className="text-xs">
              {getLikeText(post.likedBy, post.likes)}
            </span>
          )}
        </motion.div>
      ))}
    </>
  );
}
