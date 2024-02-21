import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../components/nav/nav';
import Footer from "../components/footer/footer";
import { SessionProvider } from "next-auth/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Share your Mt Kenya Experiences",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <SessionProvider>
        <Navbar />
        {children}
        <Footer />
        </SessionProvider>
        </body>
    </html>
  );
}
