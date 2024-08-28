import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./providers/auth";
import Header from "./components/header/header";
import Nav from "./components/nav";
import Container from "./components/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Text.fy",
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
          <Container>
            <div className="hidden justify-end p-2.5 md:flex xl:w-full">
              <Nav />
            </div>

            <div className="min-h-screen w-full border-solid border-gray-400 md:border-l xl:min-w-[600px] xl:max-w-[600px] xl:border-x">
              <div className="px-5 pt-5">
                <Header />
              </div>

              <div className="flex items-center justify-center px-5 pt-5 md:hidden">
                <Nav />
              </div>

              {children}
            </div>

            <div className="hidden w-full justify-start p-5 xl:flex"></div>
          </Container>
        </AuthProvider>
      </body>
    </html>
  );
}
