"use client";

import Image from "next/image";
import SignOutButton from "./signout-button";
import DeleteAllPosts from "./delete-all-posts";
import { UserDataProps } from "@/app/types";

const UserData = ({ user }: UserDataProps) => {
  return (
    <div className="flex gap-5">
      <Image
        src={user?.image ?? ""}
        alt={user?.name ?? ""}
        height={1024}
        width={1024}
        className="h-24 w-24 rounded-full md:h-28 md:w-28"
      />

      <div className="flex w-full flex-col justify-between md:justify-center md:gap-6">
        <div className="flex w-full justify-between md:px-20 xl:px-10">
          <div className="flex flex-col items-center gap-1">
            {user?.posts.length}
            <span className="text-xs text-foreground">publicações</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            {user?.followers.length}
            <span className="text-xs text-foreground">seguidores</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            {user?.following.length}
            <span className="text-xs text-foreground">seguindo</span>
          </div>
        </div>

        <div className="flex gap-5 md:px-10">
          <DeleteAllPosts user={user} />
          <SignOutButton />
        </div>
      </div>
    </div>
  );
};

export default UserData;
