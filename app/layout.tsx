import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./providers/auth";
import Container from "./components/container";
import MobileNav from "./components/nav/mobile-nav";
import DesktopNav from "./components/nav/desktop-nav";

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
            <div className="md:hidden">
              <MobileNav />
            </div>

            <div className="hidden w-fit justify-end p-5 md:flex xl:w-full">
              <DesktopNav />
            </div>

            <div className="w-full border-solid border-foreground md:border-l xl:min-w-[600px] xl:max-w-[600px] xl:border-x">
              {children}
            </div>

            <div className="hidden w-full p-5 xl:flex"></div>
          </Container>
        </AuthProvider>
      </body>
    </html>
  );
}
