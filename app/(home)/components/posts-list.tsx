import { Post as PostType, Comment, Like, User } from "@prisma/client";
import Post from "@/app/components/post";
import ActionButtons from "@/app/components/action_buttons/action-buttons";
import { getLikeText } from "@/app/helpers/likeText";

export interface PostsListProps {
  posts: (PostType & {
    comments: Comment[];
    likedBy: (Like & { user: User })[];
  })[];
}

export default function PostsList({ posts }: PostsListProps) {
  return (
    <>
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex flex-col gap-1.5 border-b border-solid border-black pb-2.5"
        >
          <Post post={post} />

          <ActionButtons
            id={post.id}
            likes={post.likes}
            comments_length={post.comments.length}
          />

          <span className="text-xs">
            {getLikeText(post.likedBy, post.likes)}
          </span>
        </div>
      ))}
    </>
  );
}
