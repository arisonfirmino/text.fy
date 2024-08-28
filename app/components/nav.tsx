"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { CirclePlusIcon, HeartIcon, HomeIcon, SearchIcon } from "lucide-react";
import Button from "./button";

export default function Nav() {
  const { data } = useSession();
  const router = useRouter();

  const [active, setActive] = useState("/");
  const nav_items = [
    { icon: <HomeIcon size={20} />, href: "/" },
    { icon: <SearchIcon size={20} />, href: "/explore" },
    { icon: <CirclePlusIcon size={20} />, href: "/post" },
    { icon: <HeartIcon size={20} />, href: "/likes/[id]" },
  ];

  return (
    <nav className="flex gap-5 rounded-full bg-white p-1 shadow-md md:flex-col md:bg-transparent md:shadow-none">
      {nav_items.map((item, index) => (
        <Button
          key={index}
          handleClick={() => {
            router.push(
              item.href === "/likes/[id]"
                ? `/likes/${data?.user.id}`
                : item.href,
            );
            setActive(item.href);
          }}
          className={`flex h-10 w-10 items-center justify-center rounded-full ${active === item.href ? "bg-black text-white" : "bg-transparent text-black"}`}
        >
          {item.icon}
        </Button>
      ))}
    </nav>
  );
}
