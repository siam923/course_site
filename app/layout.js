import { Merriweather } from "next/font/google";
import "./globals.css";
import { Footprints } from "lucide-react";
import Navbar from "@/components/main/Nav/Navbar";
import Footer from "@/components/main/Footer/Footer";
import { Toaster } from "@/components/ui/toaster";

const font = Merriweather({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Tawhid Accademy: Home",
  description: "Tawhid Academy is a private Islamic school in UK.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
