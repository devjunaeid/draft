import './globals.css'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "./components/Theme/Provider";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Junaeid's Draft",
  description: "A place where I write about anyting...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Navbar/>
          <main>{children}</main>
          <Footer/>
        </Provider>
      </body>
    </html>
  );
}
