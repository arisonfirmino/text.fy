import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./providers/auth";
import Header from "./components/header/header";
import Nav from "./components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Textfy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-container text-black`}>
        <AuthProvider>
          <div className="px-5 pt-5">
            <Header />
          </div>

          <div className="flex items-center justify-center px-5 pt-5">
            <Nav />
          </div>

          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
