"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createNewComment } from "@/app/actions/comment";
import { ArrowUpIcon, LoaderCircleIcon } from "lucide-react";

const schema = yup.object({
  text: yup.string().required().min(3),
});

export default function FormComment({ id }: { id: string }) {
  const { data: session } = useSession();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: { text: string }) => {
    const formData = {
      postId: id,
      name: session?.user?.name ?? "",
      email: session?.user?.email ?? "",
      text: data.text,
      image: session?.user?.image ?? "",
    };

    setIsLoading(true);

    try {
      await createNewComment(formData);
    } finally {
      reset();
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center gap-2.5"
    >
      <textarea
        rows={1}
        placeholder="Deixe um comentário"
        {...register("text")}
        className={`w-full resize-none rounded border border-solid bg-transparent p-1.5 ${errors.text ? "border-red-600 outline-red-600" : "border-black outline-black"}`}
      ></textarea>

      <button
        type="submit"
        disabled={isLoading}
        className={`flex items-center justify-center rounded-full p-2 text-sm ${isLoading ? "bg-gray-400 text-gray-600" : "bg-background text-white"}`}
      >
        {isLoading ? (
          <LoaderCircleIcon size={18} className="animate-spin" />
        ) : (
          <ArrowUpIcon size={18} />
        )}
      </button>
    </form>
  );
}
