import { db } from "@/app/lib/prisma";
import PageTitle from "@/app/components/page-title";
import ExploreClient from "@/app/(explore-routes)/explore/components/explore-client";

const Explore = async () => {
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
};

export default Explore;
