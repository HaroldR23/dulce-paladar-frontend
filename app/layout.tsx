import type { Metadata } from "next";

import "./globals.css";
import NavBar from "./(landing)/components/NavBar/NavBar";
import Footer from "./(landing)/components/Footer/Footer";
import WhatsAppContact from "./(landing)/components/WhatsAppContact";

export const metadata: Metadata = {
  title: "Dulce Paladar",
  description: "Momentos dulces, hechos a tu medida",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
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
