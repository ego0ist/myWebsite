// app/layout.js (Korrigierte Version für Geist Fonts)
import { GeistSans } from "geist/font/sans"; // Importiere GeistSans aus dem geist-Paket
import { GeistMono } from "geist/font/mono";   // Importiere GeistMono aus dem geist-Paket
import "./globals.css";
import dynamic from "next/dynamic";
import { ShoppingListProvider } from "./hooks/useShoppingList";
import ClientHeaderLoader from "./components/ClientHeaderLoader";

const Footer = dynamic(() => import("./components/Footer"), { ssr: true });

// Font Setup - Die Initialisierung bleibt gleich, nur die Imports oben ändern sich
// const geistSans = GeistSans({ subsets: ['latin'], variable: '--font-geist-sans' }); // Diese Zeile ist bei direkter Verwendung von GeistSans/GeistMono nicht nötig
// const geistMono = GeistMono({ subsets: ['latin'], variable: '--font-geist-mono' }); // Diese Zeile ist bei direkter Verwendung von GeistSans/GeistMono nicht nötig

export const metadata = {
  title: "vSave - einfach sparen",
  description: "Created by MC",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#ffffff", // Consider adapting based on theme
};

export default function RootLayout({ children }) {
  return (
    // Füge die Klassen direkt zum <html> Tag hinzu, wie in der Geist-Dokumentation empfohlen
    <html lang="de" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
       <ShoppingListProvider>
            {/* Die body-Klasse wird oft nicht mehr benötigt, wenn die Variablen im html-Tag sind */}
            <body className="flex flex-col min-h-screen">
                <ClientHeaderLoader />
                <main className="flex-grow w-full container mx-auto px-4 py-4 md:py-8">
                    {children}
                </main>
                <Footer />
            </body>
       </ShoppingListProvider>
    </html>
  );
}