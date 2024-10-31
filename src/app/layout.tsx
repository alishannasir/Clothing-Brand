import type { Metadata } from "next";
import "./globals.css";
import { fontRoboto } from "./font";
import Footer from "@/components/footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
export const metadata: Metadata = {
  title: "Clothing Brand",
  description: "Clothing Brand",
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
