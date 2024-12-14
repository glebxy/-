import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "we-hate-ps",
  description: "Getting help with Personal Statement",
};


// This is a new UI for this project. Some names has no meaning and are just placeholders. (e.g dashboard, feedback)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex justify-center items-center">
        {children}
      </body>
    </html>
  );
}
