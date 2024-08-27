export default function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 text-nowrap text-xs capitalize text-gray-400">
      {children} <hr className="w-full border-gray-400" />
    </div>
  );
}
