import { Inter } from "next/font/google";
import "./globals.css";
import { Footprints } from "lucide-react";
import Navbar from "@/components/main/Nav/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tawhid Accademy: Home",
  description: "Tawhid Academy is a private Islamic school in UK.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
