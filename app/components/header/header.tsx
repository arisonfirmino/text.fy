"use client";

import { useState } from "react";

interface HeaderProps {
  setShowFollowerPosts: (value: boolean) => void;
}

export default function Header({ setShowFollowerPosts }: HeaderProps) {
  const [active, setActive] = useState("Feed");
  const button_items = [{ text: "Feed" }, { text: "Seguindo" }];

  const handleActiveClick = (text: string) => {
    setActive(text);

    if (text === "Feed") {
      setShowFollowerPosts(false);
    } else if (text === "Seguindo") {
      setShowFollowerPosts(true);
    }
  };

  return (
    <header className="flex gap-5 px-5 pt-2.5">
      {button_items.map((item) => (
        <button
          key={item.text}
          onClick={() => handleActiveClick(item.text)}
          className={`w-full border-solid border-background p-2.5 ${active === item.text ? "border-b-2 text-background" : "text-foreground"}`}
        >
          {item.text}
        </button>
      ))}
    </header>
  );
}
