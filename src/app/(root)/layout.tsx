import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css"
import Navbar from "@/components/common/navbar/Navbar";
import Footer from "@/components/common/footer/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "sujon biswas",
  description: "this is my personal portfolio website",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="google-site-verification" content="zC5DZoZrRDZu2NDT6BU8gW8jr70MJqt-Xxu1OS_dY5o" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <Navbar/>
        {children}
       <Footer/>
      </body>
    </html>
  );
}
