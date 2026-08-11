import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Narendra Girdhar | BJP Chirawa Nagar Mandal President",
  description: "Official digital platform of Narendra Girdhar, BJP Chirawa Nagar Mandal President. Dedicated to public service, organisation, and development of Chirawa, Rajasthan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
