import PageTitle from "../components/page-title";
import { db } from "../lib/prisma";
import PostsList from "./components/posts-list";

const fetch = async () => {
  const getPosts = await db.post.findMany({
    include: {
      comments: true,
    },
    orderBy: {
      created_at: "desc",
    },
  });

  const [posts] = await Promise.all([getPosts]);

  return { posts };
};

export default async function Home() {
  const { posts } = await fetch();

  return (
    <>
      <div className="px-5 pt-5">
        <PageTitle>Publicações</PageTitle>
      </div>

      <PostsList posts={posts} />
    </>
  );
}
