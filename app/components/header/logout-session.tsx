import { signOut } from "next-auth/react";
import Image from "next/image";

export default function LogOutSession({
  image,
  name,
}: {
  image: string;
  name: string;
}) {
  const handleSignOutClick = () => signOut();

  return (
    <button onClick={handleSignOutClick}>
      <Image
        src={image}
        alt={name}
        height={1024}
        width={1024}
        className="h-10 w-10 rounded-full"
      />
    </button>
  );
}
