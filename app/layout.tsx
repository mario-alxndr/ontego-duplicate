import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ontego Hardware Finder",
  description: "Duplicate ontego that create next app",
  icons: {
    icon: "/ontego_business_mobility.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href={'@/public/ontego_business_mobility.ico'} sizes="any"/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
