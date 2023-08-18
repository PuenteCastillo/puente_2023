import React from "react";
import styles from "./nav_buble.module.scss";
import { Button, Tooltip } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";
import Home from "../../../images/wrestling-wrestler-svgrepo-com.svg";
import Resume from "../../../images/document-viewer-svgrepo-com.svg";
import Portfolio from "../../../images/portfolio-svgrepo-com.svg";
import Contact from "../../../images/mail-svgrepo-com.svg";

export default function Nav_buble() {
  return (
    <div className={styles.main_bubble}>
      <div className={styles.bubble}>
        <Link href="/">
          <Image src={Home} alt="home Icon" width={30} height={30} />
        </Link>
      </div>
      <div className={styles.bubble}>
        <Link href="/resume">
          <Image src={Resume} alt="resume Icon" width={30} height={30} />
        </Link>
      </div>

      <div className={`group relative ${styles.bubble}`}>
        <Link href="/work">
          <Image src={Portfolio} alt="portfolio Icon" width={30} height={30} />
        </Link>
        <span
          className={`absolute right-12 top-0 scale-0  rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ${styles.custom_tooltip}`}
        >
          Portfolio
        </span>
      </div>

      <div className={`group relative ${styles.bubble}`}>
        <Link href="/contact">
          <Image src={Contact} alt="contact Icon" width={30} height={30} />
        </Link>
        <span
          className={`absolute right-12 top-0 scale-0  rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ${styles.custom_tooltip}`}
        >
          Contact
        </span>
      </div>
    </div>
  );
}
