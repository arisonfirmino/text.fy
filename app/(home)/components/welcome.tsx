export default function Welcome() {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-10 px-10 py-5">
      <div className="space-y-2.5 text-center">
        <span className="text-xl text-background">Bem-vindo(a) à</span>
        <h1 className="text-4xl font-semibold text-primary">Text.fy</h1>
      </div>

      <p className="text-xs font-light text-foreground">
        © 2024 Arison. All Rights Reserved
      </p>
    </div>
  );
}
