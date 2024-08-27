import { Post as PostType, Comment } from "@prisma/client";
import PostAction from "./post-action";

export interface PostsListProps {
  posts: (PostType & { comments: Comment[] })[];
}

export default function PostsList({ posts }: PostsListProps) {
  return (
    <div className="flex flex-col gap-5 px-5 pt-5">
      {posts.map((post) => (
        <PostAction key={post.id} post={post} />
      ))}
    </div>
  );
}
