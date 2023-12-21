import "./globals.css";
import type { Metadata } from "next";
import Provider from "./providers/Provider";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AuthProviders from "./providers/AuthProviders";

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
        <AuthProviders>
          <Provider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </Provider>
        </AuthProviders>
      </body>
    </html>
  );
}
