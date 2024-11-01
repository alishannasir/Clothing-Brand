import type { Metadata } from "next";
import "./globals.css";
import { fontRoboto } from "./font";
import Footer from "@/components/footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
export const metadata: Metadata = {
  title: "Muse Market",
  description: "This brand curates trendy, stylish pieces at affordable prices, bringing you the best of fashion without breaking the bank. Each item is thoughtfully selected to keep you ahead of the trends while staying budget-friendly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${fontRoboto.className}`}
      > 
       <div className="sticky top-0 z-50  ">
            <Navbar />       
        </div>
        <hr className="w-full h-1 bg-black" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
