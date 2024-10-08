import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { redirect } from "next/navigation";
import Welcome from "./components/welcome";
import SignIn from "./components/signin";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/timeline");
  }

  return (
    <main className="flex h-screen w-full flex-col items-center">
      <Welcome />
      <SignIn />
    </main>
  );
}
