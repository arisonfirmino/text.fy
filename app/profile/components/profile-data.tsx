import { User } from "@prisma/client";
import Image from "next/image";

interface ProfileDataProps {
  user: User;
}

export default function ProfileData({ user }: ProfileDataProps) {
  return (
    <div>
      <Image
        src={user.image ?? ""}
        alt={user.name ?? ""}
        height={1024}
        width={1024}
        className="w-28 rounded-full"
      />

      <div>
        <h2>{user.name}</h2>
      </div>
    </div>
  );
}
