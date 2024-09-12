"use client";

import { useSession } from "next-auth/react";
import LoginSession from "./login-session";
import LogOutSession from "./logout-session";

export default function Header() {
  const { data } = useSession();

  return (
    <header className="flex justify-between">
      <h1 className="style-script text-4xl font-semibold">Text.fy</h1>

      {data?.user ? (
        <LogOutSession
          image={data.user.image ?? ""}
          name={data.user.name ?? ""}
        />
      ) : (
        <LoginSession />
      )}
    </header>
  );
}
