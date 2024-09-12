import PageTitle from "../../app/components/page-title";
import { db } from "../lib/prisma";
import ExploreClient from "./components/explore-client";

export default async function Explore() {
  const posts = await db.post.findMany({
    include: {
      user: true,
    },
  });

  return (
    <>
      <div className="px-5 pt-5">
        <PageTitle>Explorar</PageTitle>
      </div>

      <ExploreClient posts={posts} />
    </>
  );
}
