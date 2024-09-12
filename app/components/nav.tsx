"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import {
  CirclePlusIcon,
  HeartIcon,
  HomeIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";

export default function Nav() {
  const { data } = useSession();

  const [active, setActive] = useState("/");
  const nav_items = [
    {
      page: "Início",
      icon: <HomeIcon size={20} />,
      href: "/",
    },
    {
      page: "Explorar",
      icon: <SearchIcon size={20} />,
      href: "/explore",
    },
    {
      page: "Publicar",
      icon: <CirclePlusIcon size={20} />,
      href: "/new",
    },
    {
      page: "Curtidas",
      icon: <HeartIcon size={20} />,
      href: `/likes/${data?.user.id}`,
    },
    {
      page: "Perfil",
      icon: <UserIcon size={20} />,
      href: `/profile/${data?.user.id}`,
    },
  ];

  return (
    <nav className="border-foreground fixed bottom-0 z-10 w-full border-t border-solid bg-container px-1.5 pb-5 md:relative md:w-fit md:border-none">
      <div className="flex gap-5 md:flex-col md:gap-10">
        {nav_items.map((item) => (
          <Link
            key={item.page}
            href={item.href}
            onClick={() => setActive(item.href)}
            className={`flex w-full flex-col items-center justify-center gap-0.5 border-solid border-background pt-2 md:border-none md:p-0 ${active === item.href ? "border-t-2 text-background" : "text-foreground"}`}
          >
            {item.icon}
            <span className="text-sm md:hidden">{item.page}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
