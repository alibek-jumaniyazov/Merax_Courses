import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Merax Courses",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="py-10 px-24 flex flex-col justify-center items-start gap-14">
        <Header />
          <div className="container w-[1440px] my-0 mx-auto ">
            {children}
          </div>
        <Footer />
      </body>
    </html>
  );
}
