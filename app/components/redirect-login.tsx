import { signIn } from "next-auth/react";
import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function RedirectLogin() {
  const handleLogInClick = () => signIn("google");

  const items = [
    {
      text: "Continue with Google",
      icon: <FcGoogle size={16} />,
      handleClick: handleLogInClick,
    },
    {
      text: "Continue with Apple",
      icon: <FaApple size={16} />,
      handleClick: handleLogInClick,
    },
  ];

  return (
    <div className="flex flex-col gap-2.5 rounded-lg border border-solid border-black p-2.5">
      <h3 className="text-lg font-semibold">Faça Login na aplicação 👋</h3>

      <p className="text-sm">
        Ao continuar, você concorda com nossos{" "}
        <span className="underline">termos de serviço</span> e{" "}
        <span className="underline">política de privacidad</span>e.
      </p>

      {items.map((item, index) => (
        <button
          key={index}
          onClick={item.handleClick}
          className="flex items-center justify-center gap-1.5 rounded bg-white px-2 py-1.5 shadow-sm active:bg-gray-300"
        >
          {item.icon} {item.text}
        </button>
      ))}
    </div>
  );
}
