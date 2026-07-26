import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ahmadhadilukman.vercel.app"),
  title: "Ahmad Hadi Lukmanul Hakim | Web Profile & Portfolio",
  description: "Portofolio profesional Ahmad Hadi Lukmanul Hakim - Junior Software Developer & IT Support Specialist (S1 Teknik Informatika UNIMUS, IPK 3.76).",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  keywords: [
    "Ahmad Hadi Lukmanul Hakim",
    "Portofolio",
    "IT Support",
    "Software Developer",
    "Teknik Informatika UNIMUS",
    "PHP",
    "Laravel",
    "MySQL",
    "Oracle Database",
    "SIMRS",
    "Indihome Fiber Optik"
  ],
  authors: [{ name: "Ahmad Hadi Lukmanul Hakim" }],
  openGraph: {
    title: "Ahmad Hadi Lukmanul Hakim | Web Profile",
    description: "Junior Software Developer & IT Support Specialist (IPK 3.76, S1 Teknik Informatika)",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen relative font-sans overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
