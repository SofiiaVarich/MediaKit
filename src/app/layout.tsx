import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Konnektoren Media Kit 2026",
  description:
    "Konnektoren Media Kit — Education, Technology, Culture and Community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
