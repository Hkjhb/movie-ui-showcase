import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movie UI Showcase",
  description:
    "Explore a curated collection of iconic films — filter by genre, search by title, and discover your next watch.",
  keywords: ["movies", "film", "showcase", "cinema"],
  openGraph: {
    title: "Movie UI Showcase",
    description:
      "Explore a curated collection of iconic films — filter by genre, search by title, and discover your next watch.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "'Poppins', sans-serif" }}>{children}</body>
    </html>
  );
}
