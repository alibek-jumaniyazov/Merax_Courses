import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
    title: "Merax Courses",
    description: "",
    // icons: {
    //     icon: "",
    // },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="uz">
            <body className="py-10  flex flex-col justify-center items-start gap-14 bg-[#FCFCFC]">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
