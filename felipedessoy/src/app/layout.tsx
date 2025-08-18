import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"

const vt323 = VT323({
  weight: "400",
  subsets:["latin"],
  variable: "--font-vt323",
})

export const metadata: Metadata = {
  title: "Felipe's personal website",
  description: "Developer portfolio"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${vt323.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}