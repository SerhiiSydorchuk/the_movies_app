import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/app/components/Header/Header";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: " MovieVibe",
  description: "Watch Film App",

  icons: {
    icon: [
      {rel: 'icon', sizes: '32x32', type: 'image/png', url: '/favicon-32x32.png'},
      {rel: 'icon', sizes: '16x16', type: 'image/png', url: '/favicon-16x16.png'},
    ],
    apple: '/apple-touch-icon.png',
  },
   };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">

      <body className={`${geistSans.variable} ${geistMono.variable} bgi`}>
      <Header/>
      {children}
      </body>
      </html>
  );
}
