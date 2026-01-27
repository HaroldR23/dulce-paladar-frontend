import type { Metadata } from "next";

import "./globals.css";
import NavBar from "./(landing)/components/NavBar/NavBar";
import Footer from "./(landing)/components/Footer/Footer";
import WhatsAppContact from "./(landing)/components/WhatsAppContact";
import { Lobster_Two } from 'next/font/google';

export const metadata: Metadata = {
  title: "Dulce Paladar",
  description: "Momentos dulces, hechos a tu medida",
};


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
    <html lang="en" className={lobsterTwo.variable}>
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
