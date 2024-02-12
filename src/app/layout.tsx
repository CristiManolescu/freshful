import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./global.module.css";

import { ReduxProvider } from "./redux/provider";

import Header from "./components/Header/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freshful demo app",
  description: "Viata ar trebui sa fie Freshful",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.global}`}>
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
