import type { Metadata } from "next";
import "./globals.css";
import { fontRoboto } from "./font";


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
        {children}
      </body>
    </html>
  );
}
