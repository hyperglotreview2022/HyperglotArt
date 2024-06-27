"use client";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";

export default function RootLayout({ children }) {
  return (
    <KindeProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </KindeProvider>
  );
}