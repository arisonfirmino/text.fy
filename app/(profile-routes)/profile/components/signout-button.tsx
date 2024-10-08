"use client";

import { LogOutIcon } from "lucide-react";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  const handleSignOutClick = () => signOut();

  return (
    <button
      onClick={handleSignOutClick}
      className="flex items-center justify-between gap-2.5 rounded-md bg-red-600 px-2 py-1 text-sm text-white active:bg-gray-400 md:w-full"
    >
      <span className="hidden md:block">Sair</span>

      <LogOutIcon size={14} />
    </button>
  );
}
