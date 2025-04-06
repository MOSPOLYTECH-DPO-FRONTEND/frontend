"use client";

import "@/styles/globals.css";
import FooterComponent from "@/app/components/layout/FooterComponent";
import { AsideComponent } from "@/app/components/layout/AsideComponent";
import { useSelectedLayoutSegments } from "next/navigation";

export default function RootLayout({ children }) {
  const segments = useSelectedLayoutSegments();

  const isNoLayout = segments.includes("(no-layout)");

  return (
    <html>
      <body className="flex">
        {!isNoLayout && <AsideComponent />}
        <div className="grow">
          <div>{children}</div>
          {!isNoLayout && <FooterComponent />}
        </div>
      </body>
    </html>
  );
}
