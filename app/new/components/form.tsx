"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoaderCircleIcon, MoveRightIcon } from "lucide-react";
import { createNewPost } from "@/app/actions/post";
import Sooner from "./sooner";

const schema = yup.object({
  text: yup.string().required().min(3),
});

export default function Form() {
  const { data: session } = useSession();
  const [showSooner, setShowSooner] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: { text: string }) => {
    if (!session?.user.id) {
      return;
    }

    const formData = {
      userId: session?.user.id,
      text: data.text,
    };

    setIsLoading(true);

    try {
      await createNewPost(formData);
    } catch (error) {
      console.error("Failed to add post", error);
    } finally {
      reset();
      setIsLoading(false);
      setShowSooner(true);
      setTimeout(() => {
        setShowSooner(false);
      }, 3500);
    }
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
        disabled={isLoading}
        className={`flex items-center justify-between rounded-full px-5 py-2.5 text-white active:bg-gray-400 ${isLoading ? "bg-gray-400" : "bg-black"}`}
      >
        {isLoading ? (
          <>
            Publicando
            <LoaderCircleIcon size={16} className="animate-spin" />
          </>
        ) : (
          <>
            Publicar
            <MoveRightIcon size={16} />
          </>
        )}
      </button>

      {showSooner && <Sooner />}
    </form>
  );
}
