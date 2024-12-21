import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import Navbar from "@/components/blocks/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/blocks/Footer";

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
  title: "Maksym Yatsenko",
  description: "Made with next.js, Tailwind, motion and love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
          >
          <ThemeProvider
          attribute="class"
          >
          <Navbar />
          {children}
          <Footer/>
      </ThemeProvider>
        </body>
    </html>
  );
}
