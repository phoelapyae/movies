import "@/styles/globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="grid grid-rows-[1fr_5rem] lg:grid-rows-1 lg:grid-cols-[5rem_1fr]">
          <header className="lg:h-screen bg-zinc-950 border-t border-zinc-800 lg:border-r">
            <Navbar />
          </header>
          <div className="-order-1 lg:order-none overflow-y-auto h-[calc(100vh-5rem)] lg:h-screen">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
