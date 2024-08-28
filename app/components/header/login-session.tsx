import { signIn } from "next-auth/react";
import { UserIcon } from "lucide-react";
import Image from "next/image";
import Button from "./button";

export default function LoginSession() {
  const handleLogInClick = () => signIn("google");

  return (
    <>
      <div className="flex items-center gap-2.5">
        <Image
          src="/logo.png"
          alt="Logo Textfy"
          height={259}
          width={259}
          className="h-10 w-10"
        />
        <h1 className="text-xl font-semibold">Text.fy</h1>
      </div>

      <Button handleClick={handleLogInClick}>
        <UserIcon />
      </Button>
    </>
  );
}
