// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // Import global CSS

import Navbar from "@/components/header";
import Footer from "@/components/footer";

// Global metadata
export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Showcasing my projects and skills",
};

// Layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar /> {/* Global navbar */}
        <main className="flex-grow">{children}</main> {/* Main content */}
        <Footer /> {/* Global footer */}
      </body>
    </html>
  );
}
