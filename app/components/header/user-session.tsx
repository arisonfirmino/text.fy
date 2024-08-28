import { signOut } from "next-auth/react";
import { LogOutIcon } from "lucide-react";
import Image from "next/image";
import Button from "./button";

interface UserSessionProps {
  name: string;
  image: string;
}

export default function UserSession({ name, image }: UserSessionProps) {
  const handleSignOutClick = () => signOut();

  return (
    <>
      <div className="flex items-center gap-2.5">
        <Image
          src={image}
          alt={name}
          height={1024}
          width={1024}
          className="h-10 w-10 rounded-full"
        />
        <h2 className="text-xl font-medium">{name}</h2>
      </div>

      <Button handleClick={handleSignOutClick}>
        <LogOutIcon size={20} />
      </Button>
    </>
  );
}
