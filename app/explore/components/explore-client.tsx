"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import RedirectLogin from "@/app/components/redirect-login";
import { Post as PostType, User } from "@prisma/client";
import Search from "./search";
import Post from "@/app/components/post";

interface ExploreClientProps {
  posts: (PostType & {
    user: User;
  })[];
}

export default function ExploreClient({ posts }: ExploreClientProps) {
  const { data } = useSession();

  const [filteredPosts, setFilteredPosts] = useState<
    (PostType & { user: User })[]
  >([]);

  const handleSearch = (term: string) => {
    if (term.trim() === "") {
      setFilteredPosts([]);
    } else {
      const results = posts.filter((post) =>
        post.user.name?.toLowerCase().includes(term.toLowerCase()),
      );
      setFilteredPosts(results);
    }
  };

  return (
    <>
      {data?.user ? (
        <div className="flex flex-col items-center gap-5 px-5 py-5">
          <Search onSearch={handleSearch} />

          <>
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => <Post key={post.id} post={post} />)
            ) : (
              <p className="text-sm text-gray-400">
                Use a barra de pesquisa para localizar um usuário.
              </p>
            )}
          </>
        </div>
      ) : (
        <div className="px-5 pt-5">
          <RedirectLogin />
        </div>
      )}
    </>
  );
}
