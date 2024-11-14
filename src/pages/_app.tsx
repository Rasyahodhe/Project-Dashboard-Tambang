import LayoutShell from "@/components/layouts/LayoutSheell"; // Perbaiki typo di "LayoutSheell"
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import Dashboard from "./dashboard";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoggin, setIsLoggin] = useState(true);

  return (
    <>
      {isLoggin ? (
        <LayoutShell>
          <Component {...pageProps} className="px-0" />
        </LayoutShell>
      ) : (
        <Dashboard />
      )}
    </>
  );
}
