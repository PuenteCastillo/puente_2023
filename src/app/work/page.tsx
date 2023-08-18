"use client";
import Image from "next/image";
import PageSlider from "../components/PageSlider";
import styles from "./page.module.scss";

export default function work() {
  return (
    <PageSlider>
      <main id={styles.Resume_Page}>
        <section className="container">
          <h1> Portfolio </h1>
        </section>
      </main>
    </PageSlider>
  );
}
