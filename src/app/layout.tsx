import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { CookiesProvider } from 'next-client-cookies/server'
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HRMS",
  description: "Generated by next js technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CookiesProvider>
          {children}
          <Toaster />
        </CookiesProvider>
      </body>
    </html>
  );
}
