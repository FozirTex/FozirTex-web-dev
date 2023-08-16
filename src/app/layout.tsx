import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container, SSRProvider } from "@/components/bootstrap";
import NavBar from "./NavBar";
import styles from "@/app/_global-layout.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FozirTex | Download BadX app",
  description:
    "In this page, you could download BadX app for your device for both Android and iOS systems.",
  authors: [{ name: "Matrix from FozirTex Team", url: "https://fozirtex.com" }],
  keywords: [
    "FozirTex",
    "BadX",
    "場地租借",
    "羽球場地租借",
    "羽球",
    "羽球場地",
    "羽球場地預約",
    "羽球場地預約系統",
    "羽球場地預約平台",
  ],
  // viewport
  // appLinks
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SSRProvider>
          <NavBar />
          <main className={styles["base"]}>
            <Container className="py-4">{children}</Container>
          </main>
        </SSRProvider>
      </body>
    </html>
  );
}
