import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Headline from "./components/Navbar/Headline";
import Nav from "./components/Navbar/Nav";
import {useTranslations} from 'next-intl';
import {NextIntlClientProvider, useMessages} from 'next-intl';

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
  children, params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  const tNav = useTranslations('Nav');
  const tHeadline = useTranslations('Headline');
  const messages = useMessages();

  const sections = [tNav('Home'), tNav('About'), tNav('Services'), tNav('Reviews'), tNav('Blog'), tNav('FAQs'), tNav('Contact')];

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <main className="h-screen">
              <Headline title={tHeadline('title')} />
              <Nav sections={sections} />
              {children}
            </main>
        </NextIntlClientProvider> 
      </body>
    </html>
  );
}
