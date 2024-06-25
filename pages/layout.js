"use client";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";
import Auth from "./api/auth";

export default function RootLayout({ children }) {
  return (
    <KindeProvider>
      <html lang="en">
        <body>
          <Auth>{children}</Auth>
        </body>
      </html>
    </KindeProvider>
  );
}