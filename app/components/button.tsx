interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  handleClick?: () => void;
}

export default function Button({
  children,
  className,
  handleClick,
}: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      className={`flex h-10 w-10 items-center justify-center rounded-full bg-black text-white active:bg-gray-400 active:text-gray-600 ${className}`}
    >
      {children}
    </button>
  );
}
