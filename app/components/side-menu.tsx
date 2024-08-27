"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { CirclePlusIcon, HeartIcon, HomeIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SideMenu() {
  const { data } = useSession();

  const [active, setActive] = useState("/");
  const menu_items = [
    { icon: <HomeIcon size={20} />, href: "/" },
    { icon: <SearchIcon size={20} />, href: "/explore" },
    { icon: <CirclePlusIcon size={20} />, href: "/post" },
    { icon: <HeartIcon size={20} />, href: "/likes" },
    {
      icon: (
        <Image
          src={data?.user?.image ?? ""}
          alt={data?.user?.name ?? ""}
          height={1024}
          width={1024}
          className="h-5 w-5 rounded-full"
        />
      ),
      href: "/profile",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      {menu_items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          onClick={() => setActive(item.href)}
          className={`flex h-10 w-10 items-center justify-center rounded-full ${active === item.href ? "bg-black text-white" : "bg-transparent text-black"}`}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
