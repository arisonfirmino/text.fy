import { Comment as CommentType } from "@prisma/client";
import Comment from "./comment";

interface CommentListProps {
  comments: CommentType[];
}

export default function CommentList({ comments }: CommentListProps) {
  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
}
