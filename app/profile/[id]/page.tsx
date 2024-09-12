import PageTitle from "@/app/components/page-title";
import Post from "@/app/components/post";
import { db } from "@/app/lib/prisma";
import ProfileData from "../components/profile-data";

interface ProfilePageProps {
  params: {
    id: string;
  };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { id } = params;

  const user = await db.user.findUnique({
    where: {
      id: id,
    },
    include: {
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

  if (!user) {
    return <div>Usuário não encontrado.</div>;
  }

  return (
    <div>
      <div className="px-5 pt-5">
        <PageTitle>Seu perfil</PageTitle>
      </div>

      <div className="px-5 pt-5">
        <ProfileData user={user} />
      </div>

      <div className="px-5 pt-5">
        <PageTitle>Suas Publicações</PageTitle>
      </div>

      <div className="space-y-5 px-5 pt-5">
        {user.posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
