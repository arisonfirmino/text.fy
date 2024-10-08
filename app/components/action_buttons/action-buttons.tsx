import { SendIcon } from "lucide-react";
import LikeButton from "./like-button";
import CommentButton from "./comment-button";

interface ActionButtonsProps {
  id: string;
  likes: any;
}

export default function ActionButtons({ id, likes }: ActionButtonsProps) {
  return (
    <div className="flex items-center gap-2.5">
      <LikeButton id={id} likes={likes} />

      <CommentButton id={id} />

      <button>
        <SendIcon size={16} />
      </button>
    </div>
  );
}
