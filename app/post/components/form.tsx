"use client";

import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MoveRightIcon } from "lucide-react";

const schema = yup.object({
  text: yup.string().required().min(3),
});

export default function Form() {
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
      name: session?.user?.name ?? "",
      email: session?.user?.email ?? "",
      text: data.text,
      image: session?.user?.image ?? "",
    };

    reset();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-between gap-20"
    >
      <textarea
        rows={5}
        placeholder="O que está pensando ?"
        {...register("text")}
        className={`w-full resize-none rounded border border-solid bg-transparent p-1.5 ${errors.text ? "border-red-600 outline-red-600" : "border-black outline-black"}`}
      ></textarea>

      <button
        type="submit"
        className="flex items-center justify-between rounded-full bg-black px-5 py-2.5 text-white"
      >
        Publicar
        <MoveRightIcon />
      </button>
    </form>
  );
}
