import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import NavBar from "../components/NavBar";
import styles from "@/styles/_global-layout.module.scss";

const noto_tc = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
});

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
      <body className={`${styles["body"]} ${noto_tc.className}`}>
        <NavBar />
        <main className={styles["base"]}>
          <div className="py-4">{children}</div>
        </main>
      </body>
    </html>
  );
}
