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
import Image from "next/image";
import Link from "next/link";

export default function DesktopNav() {
  const { data: session } = useSession();

  const [active, setActive] = useState("/timeline");
  const nav_items = [
    {
      page: "Início",
      icon: <HomeIcon size={20} />,
      href: "/timeline",
    },
    {
      page: "Explorar",
      icon: <SearchIcon size={20} />,
      href: "/explore",
    },
    {
      page: "Publicar",
      icon: <CirclePlusIcon size={20} />,
      href: "/new-post",
    },
    {
      page: "Curtidas",
      icon: <HeartIcon size={20} />,
      href: `/likes/${session?.user.id}`,
    },
    {
      page: "Perfil",
      icon: session?.user ? (
        <Image
          src={session?.user.image ?? ""}
          alt={session?.user.name ?? ""}
          height={1024}
          width={1024}
          className="w-5 rounded-full"
        />
      ) : (
        <UserIcon size={20} />
      ),
      href: "/profile",
    },
  ];

  return (
    <nav className="flex flex-col gap-10">
      {nav_items.map((item) => (
        <div key={item.page}>
          {session?.user ? (
            <Link
              href={item.href}
              onClick={() => setActive(item.href)}
              className={`${active === item.href ? "text-background" : "text-foreground"}`}
            >
              {item.icon}
            </Link>
          ) : (
            <span className="cursor-not-allowed text-foreground">
              {item.icon}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
