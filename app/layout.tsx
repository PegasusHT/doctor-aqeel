import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Headline from "./components/Navbar/Headline";
import Nav from "./components/Navbar/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pediatric Endocrinologist | Dr Aqeel Farooque",
  description: "Clone of Dr Aqeel's website",
  icons: {
    icon: {
      url: "/favicon-32x32.png",
      rel: "icon",
      sizes: "32x32",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-screen">
          <Headline />
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
