"use client";

import { useState } from "react";
import { SearchIcon } from "lucide-react";

interface SearchProps {
  onSearch: (term: string) => void;
}

export default function Search({ onSearch }: SearchProps) {
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="flex w-full items-center gap-2.5 rounded-lg border border-solid border-black p-2.5"
    >
      <input
        type="search"
        value={search}
        onChange={handleChange}
        placeholder="Pesquisar"
        className="w-full bg-transparent outline-none"
      />

      <button type="submit" className="text-gray-400">
        <SearchIcon size={16} />
      </button>
    </form>
  );
}
