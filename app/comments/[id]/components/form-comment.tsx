"use client";

import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createNewComment } from "@/app/actions/comment";

const schema = yup.object({
  text: yup.string().required().min(3),
});

export default function FormComment({ id }: { id: string }) {
  const { data: session } = useSession();

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

    await createNewComment(formData).then(() => reset());
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="fixed bottom-0 left-1/2 w-full -translate-x-1/2 transform bg-container p-5"
    >
      <div className="flex flex-col items-end gap-2.5">
        <textarea
          rows={1}
          placeholder="Deixe um comentário"
          {...register("text")}
          className={`w-full resize-none rounded border border-solid bg-transparent p-1.5 ${errors.text ? "border-red-600 outline-red-600" : "border-black outline-black"}`}
        ></textarea>

        <button
          type="submit"
          className="w-fit rounded-full bg-black px-2.5 py-1 text-sm text-white"
        >
          Comentar
        </button>
      </div>
    </form>
  );
}
