import { signIn } from "next-auth/react";
import { UserIcon } from "lucide-react";

export default function LoginSession() {
  const handleLogInClick = () => signIn("google");

  return (
    <button
      onClick={handleLogInClick}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-primary active:bg-gray-400 active:text-gray-600"
    >
      <UserIcon size={20} />
    </button>
  );
}
