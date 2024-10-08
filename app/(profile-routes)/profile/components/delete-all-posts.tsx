import { Trash2Icon } from "lucide-react";
import { deleteAllPosts } from "@/app/actions/post";
import { notFound } from "next/navigation";
import { DeleteAllPostsProps } from "@/app/types";

const DeleteAllPosts = ({ user }: DeleteAllPostsProps) => {
  if (!user) {
    return notFound();
  }

  const handleDeleteClick = async () => {
    await deleteAllPosts({ userId: user.id });
  };

  return (
    <button
      onClick={handleDeleteClick}
      disabled={user.posts.length === 0}
      className={`flex w-full items-center justify-between gap-2.5 text-nowrap rounded-md border border-solid border-primary px-2.5 py-1 text-sm active:border-red-600 active:text-red-600 ${user.posts.length === 0 ? "cursor-not-allowed" : ""}`}
    >
      Excluir publicações
      <Trash2Icon size={14} />
    </button>
  );
};

export default DeleteAllPosts;
