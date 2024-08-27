"use client";

import { useSession } from "next-auth/react";
import Form from "./form";
import RedirectLogin from "@/app/components/redirect-login";

export default function PostClient() {
  const { data } = useSession();

  return (
    <div>
      {data?.user ? (
        <div className="px-5 py-5">
          <Form />
        </div>
      ) : (
        <div className="px-5 pt-5">
          <RedirectLogin />
        </div>
      )}
    </div>
  );
}
