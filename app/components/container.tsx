export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-screen w-full justify-center">{children}</main>
  );
}
