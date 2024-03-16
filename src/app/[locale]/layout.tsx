import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import Headline from "../components/Navbar/Headline";
import Nav from "../components/Navbar/Nav";
import {useTranslations} from 'next-intl';
import {NextIntlClientProvider, useMessages} from 'next-intl';
import Footer from "../components/Footer/Footer";

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

  const sections = [tNav('Home'), tNav('About'), tNav('Services'), tNav('Blog'), tNav('FAQs'), tNav('Contact')];

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="grid grid-rows-2 lg:w-4/5 mx-auto">
            <div className="flex justify-center ">
              <Headline title={tHeadline('title')} />
            </div>
            <div className="w-full">
              <Nav sections={sections} />
            </div>
          </div>  
          <main className="">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider> 
      </body>
    </html>
  );
}
