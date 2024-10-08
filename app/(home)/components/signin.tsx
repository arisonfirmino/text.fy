"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";

export default function SignIn() {
  const handleLogInClick = () => signIn("google");

  return (
    <div className="flex h-full w-full flex-col items-center rounded-t-3xl bg-background px-14 py-10 md:bg-transparent">
      <Image
        src="/logo.png"
        alt="Text.fy Logo"
        height={259}
        width={259}
        className="w-14"
      />

      <div className="flex h-full flex-col items-center justify-center gap-10">
        <p className="text-center text-sm text-foreground">
          faça login usando sua conta Google ou Apple para acessar a aplicação
        </p>

        <div className="flex w-full flex-col items-center gap-2.5 text-white md:text-black">
          <button
            onClick={handleLogInClick}
            className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-solid border-foreground p-2.5"
          >
            <FcGoogle />
            Sign in with Google
          </button>

          <span>ou</span>

          <button className="flex w-full cursor-not-allowed items-center justify-center gap-2.5 rounded-xl border border-solid border-foreground p-2.5">
            <SiApple />
            Sign in with Apple
          </button>
        </div>
      </div>
    </div>
  );
}
