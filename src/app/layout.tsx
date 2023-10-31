import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./page.module.scss";
import Sidebar from "./components/SibebarContents";
import Mobile_sidebar from "./components/Mobile_sidebar";
import Nav_buble from "./components/Nav_buble";
import Bg_aimations from "./bg_aimations";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "J.P Castillo",
  description: "Welcome to my personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Mobile_sidebar />
        <Bg_aimations />
        <div className={styles.parent}>
          <div id="main_body" className={`  ${styles.child}`}>
            <div className={`grid grid-cols-12 ${styles.main_body} `}>
              <div className=" hidden lg:block md:col-span-4 xl:col-span-3 ">
                <Sidebar />
              </div>
              {children}
            </div>
            <Nav_buble />
          </div>
        </div>
      </body>
    </html>
  );
}
