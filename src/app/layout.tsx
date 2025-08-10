import type { Metadata } from "next";
import {League_Spartan, Poppins } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import Header from "../components/Header";
import Footer from "../components/Footer";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--ff-league_spartan",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--ff-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "English Lessons with a Teacher — Individual and Friendly",
  description: "Online English lessons for Beginner, Pre-Intermediate, and Intermediate levels. Individual approach, exam preparation, flexible schedule.",

  openGraph: {
    title: "English Lessons with a Teacher",
    description:
      "Online English lessons for beginners and exam preparation.",
    url: "",
    siteName: "English Teacher",
    images: [
      {
        url: "", // добавим в public позже
        width: 1200,
        height: 630,
        alt: "English lessons online",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.variable} ${poppins.variable} antialiased`}
      >
        <Header/>
        <main>
          {children}
        </main>
        
        <Footer/>
      </body>
    </html>
  );
}
