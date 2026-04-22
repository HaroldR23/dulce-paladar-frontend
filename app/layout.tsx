import type { Metadata } from "next";

import "./globals.css";
import NavBar from "./(landing)/components/NavBar/NavBar";
import Footer from "./(landing)/components/Footer/Footer";
import WhatsAppContact from "./(landing)/components/WhatsAppContact";
import { Lobster_Two } from 'next/font/google';
import { metadata as seoMetadata, localBusinessSchema } from "./seo.constants";

export const metadata: Metadata = seoMetadata;

const lobsterTwo = Lobster_Two({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-lobster',
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="es" className={lobsterTwo.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <NavBar />
        <main className="flex-1">
          {children}
        </main>
        <WhatsAppContact />
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
