import PageTitle from "@/app/components/page-title";
import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import UserData from "./components/user-data";
import { db } from "@/app/lib/prisma";
import Post from "@/app/components/post";

const Profile = async () => {
  const session = await getServerSession(authOptions);

  const user = await db.user.findUnique({
    where: {
      id: session?.user.id,
    },
    include: {
      followers: {
        include: {
          follower: true,
        },
      },
      following: {
        include: {
          following: true,
        },
      },
      posts: {
        include: {
          user: true,
        },
        orderBy: {
          created_at: "desc",
        },
      },
    },
  });

  return (
    <>
      <div className="px-5 pt-5">
        <PageTitle>Seu perfil</PageTitle>
      </div>

      <div className="px-5 pt-5">
        <UserData user={user} />
      </div>

      <div className="px-5 pt-5">
        <PageTitle>Suas publicações</PageTitle>
      </div>

      <div className="space-y-5 px-5 pt-5">
        {user?.posts.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </>
  );
};

export default Profile;
