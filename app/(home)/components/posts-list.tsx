import { Post as PostType } from "@prisma/client";
import Post from "./post";

export interface PostsListProps {
  posts: PostType[];
}

export default function PostsList({ posts }: PostsListProps) {
  return (
    <div className="flex flex-col gap-5 px-5 pt-5">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
