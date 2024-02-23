import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meet Thummar",
  description: "Created By Meet Thummar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation/>
        {children}
        </body>
    </html>
  );
}
