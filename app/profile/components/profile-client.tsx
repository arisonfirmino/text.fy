"use client";

import { useSession } from "next-auth/react";
import RedirectLogin from "@/app/components/redirect-login";

export default function ProfileClient() {
  const { data } = useSession();

  return (
    <div>
      {data?.user ? (
        <div className="px-5 py-5">Carregando</div>
      ) : (
        <div className="px-5 pt-5">
          <RedirectLogin />
        </div>
      )}
    </div>
  );
}
