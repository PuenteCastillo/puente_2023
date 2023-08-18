"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import PageSlider from "./components/PageSlider";
import Home_header from "./components/home/Home_header";
import What_i_do from "./components/home/what_i_do";
import Home_clients from "./components/home/Home_clients";

export default function Home() {
  return (
    <PageSlider>
      <main className={styles.hello}>
        <Home_header />
        <What_i_do />
        <Home_clients />
      </main>
    </PageSlider>
  );
}
