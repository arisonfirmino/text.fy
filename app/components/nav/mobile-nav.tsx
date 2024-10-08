"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { CirclePlusIcon, HeartIcon, HomeIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const { data: session } = useSession();
  const pathname = usePathname();

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
      icon: (
        <Image
          src={session?.user.image ?? ""}
          alt={session?.user.name ?? ""}
          height={1024}
          width={1024}
          className="w-5 rounded-full"
        />
      ),
      href: "/profile",
    },
  ];

  return (
    <nav
      className={`fixed bottom-0 z-10 flex w-full gap-5 border-t border-solid border-foreground bg-white px-1.5 pb-5 ${pathname === "/" ? "hidden" : "flex"}`}
    >
      {nav_items.map((item) => (
        <Link
          key={item.page}
          href={item.href}
          onClick={() => setActive(item.href)}
          className={`flex w-full flex-col items-center justify-center gap-1 border-solid border-background pt-2.5 ${active === item.href ? "border-t-2 text-background" : "text-foreground"}`}
        >
          <span>{item.icon}</span>
          <span className="text-sm">{item.page}</span>
        </Link>
      ))}
    </nav>
  );
}
