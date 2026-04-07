import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flippo Land & Wildlife Solutions | Arkansas Land & Wildlife Management",
  description:
    "Arkansas land and wildlife management experts. Timber stand improvement, prescribed burning, food plots, land clearing, GTR builds, and wildlife habitat consulting for deer, turkey, and duck. Serving Arkansas landowners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
