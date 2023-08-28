"use client";

import React from "react";
import styles from "./nav_buble.module.scss";
import { Button, Tooltip } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";
import Home from "../../../images/wrestling-wrestler-svgrepo-com.svg";
import Resume from "../../../images/document-viewer-svgrepo-com.svg";
import Portfolio from "../../../images/portfolio-svgrepo-com.svg";
import Contact from "../../../images/mail-svgrepo-com.svg";
import Download_icon from "../../../images/download.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav_buble() {
  return (
    <motion.div
      initial={{ height: 82 }}
      animate={{ height: 250 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={styles.main_bubble}
    >
      <div className={`group relative ${styles.bubble}`}>
        <Link href="/">
          <Image src={Home} alt="home Icon" width={30} height={30} />
        </Link>
        <span
          className={`absolute right-12 top-0 scale-0  rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ${styles.custom_tooltip}`}
        >
          Home
        </span>
      </div>

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className={`group relative ${styles.bubble}`}
      >
        <Link href="/resume">
          <Image src={Resume} alt="resume Icon" width={30} height={30} />
        </Link>
        <span
          className={`absolute right-12 top-0 scale-0  rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ${styles.custom_tooltip}`}
        >
          Resume
        </span>
      </motion.div>

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.8 }}
        className={`group relative ${styles.bubble}`}
      >
        <Link href="/work">
          <Image src={Portfolio} alt="portfolio Icon" width={30} height={30} />
        </Link>
        <span
          className={`absolute right-12 top-0 scale-0  rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ${styles.custom_tooltip}`}
        >
          Portfolio
        </span>
      </motion.div>

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.1 }}
        className={`group relative ${styles.bubble}`}
      >
        <Link href="/JP_Castillo.pdf" target="_blank">
          <Image
            src={Download_icon}
            alt="contact Icon"
            width={25}
            height={25}
            className=" opacity-40"
          />
        </Link>
        <span
          className={`absolute right-12 top-0 scale-0  rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ${styles.custom_tooltip}`}
        >
          Downlaod CV
        </span>
      </motion.div>
    </motion.div>
  );
}
