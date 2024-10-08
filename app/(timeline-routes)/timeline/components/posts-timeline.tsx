"use client";

import { useState } from "react";
import { PostsTimelineProps, PostWithRelations } from "@/app/types";
import Header from "@/app/components/header/header";
import PageTitle from "@/app/components/page-title";
import Post from "@/app/components/post";
import ActionButtons from "@/app/components/action_buttons/action-buttons";
import { getLikeText } from "@/app/helpers/likeText";

const PostsTimeline = ({ posts, filteredPosts }: PostsTimelineProps) => {
  const [showFollowerPosts, setShowFollowerPosts] = useState(false);

  const renderPosts = (postsToRender: PostWithRelations[]) => {
    return postsToRender.map((post) => (
      <div
        key={post.id}
        className="space-y-1.5 border-b border-solid border-black border-opacity-50 pb-1.5"
      >
        <Post post={post} />
        <ActionButtons id={post.id} likes={post.likes} />
        <span className="text-xs">{getLikeText(post.likedBy, post.likes)}</span>
      </div>
    ));
  };

  return (
    <>
      <Header setShowFollowerPosts={setShowFollowerPosts} />

      <div className="px-5 pt-5">
        <PageTitle>Publicações</PageTitle>
      </div>

      <div className="space-y-5 px-5 pt-5">
        {showFollowerPosts ? renderPosts(filteredPosts) : renderPosts(posts)}
      </div>
    </>
  );
};

export default PostsTimeline;
