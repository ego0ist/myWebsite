import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; 
import dynamic from "next/dynamic";


const Header = dynamic(() => import("./components/Header"), { ssr: true });
const Footer = dynamic(() => import("./components/Footer"), { ssr: true });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Improves perceived loading performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "vSave - einfach sparen",
  description: "Created by MC",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="flex flex-col">
        <Header />
        <main className="flex-grow w-full px-4 py-4 md:container md:mx-auto md:p-6"> {children} </main>
        <Footer />
      </body>
    </html> 
  );
}