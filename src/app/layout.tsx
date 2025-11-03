import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Kraft and Serenade | Handcrafted Fower Bouquets",
  description: "Browse handcrafted flower bouquets from real customers. Elegant custom arrangements by Kraft and Serenade.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
