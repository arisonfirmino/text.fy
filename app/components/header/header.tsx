"use client";

import { useSession } from "next-auth/react";
import LoginSession from "./login-session";
import UserSession from "./user-session";

export default function Header() {
  const { data } = useSession();

  return (
    <header className="flex items-center justify-between rounded-full bg-white p-2.5 shadow-md">
      {data?.user ? (
        <UserSession
          name={data.user.name ?? ""}
          image={data.user.image ?? ""}
        />
      ) : (
        <LoginSession />
      )}
    </header>
  );
}
