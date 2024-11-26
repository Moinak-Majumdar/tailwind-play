import "@/app/css/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Navbar } from "./components/Navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "800"] });

export const metadata: Metadata = {
  title: "Tailwind play",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`bg-slate-900 ${poppins.className}`} >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
