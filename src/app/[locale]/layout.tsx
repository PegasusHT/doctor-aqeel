import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import {useTranslations} from 'next-intl';
import {NextIntlClientProvider, useMessages} from 'next-intl';
import Footer from "../components/Footer/Footer";
import Header from "../components/Navbar/Header";

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

  const title = tHeadline('title');
  const sections = [tNav('Home'), tNav('About'), tNav('Services'), tNav('Blog'), tNav('FAQs'), tNav('Contact')];

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header title={title} sections={sections} />
          <main className="">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider> 
      </body>
    </html>
  );
}
