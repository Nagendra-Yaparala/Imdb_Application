import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Header from "@/Components/Header";
import SearchItems from "@/Components/SearchItems";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB",
  description: "Imdb application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      <Header/>
      <SearchItems/>
        {children}
        
        </body>
    </html>
  );
}
