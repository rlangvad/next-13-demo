import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CC Demo",
  description: "CC Demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="mx-auto mt-20 flex flex-col items-center lg:w-[1200px] ">
          <Link href="/" className="text-4xl font-medi  um">
            <Image
              src="/cc-logo.svg"
              alt=""
              width={360}
              height={180}
              priority
            />
          </Link>
          {children}
        </main>
      </body>
    </html>
  );
}
