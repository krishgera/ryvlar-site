import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import {Navbar} from "@/components/custom/Navbar";
import { ToastProvider } from "@/components/providers/toast-provider";

const quicksand = Quicksand({
    variable: "--font-quicksand",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Ryvlar",
    description: "One Intelligence, One Platform, One Solution",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${quicksand.variable} font-sans antialiased dark:bg-black bg-white`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
        >
            <ToastProvider>
                <Navbar />
                {children}
            </ToastProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}