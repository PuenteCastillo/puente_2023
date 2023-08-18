"use client";

import React from "react";
import Image from "next/image";
import Dots from "../../../images/dotpattern.jpeg";
import styles from "./mobile_sidebar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import LinkedIn from "../../../images/linkedin-in.svg";
import Instagram from "../../../images/instagram.svg";
import Github from "../../../images/github.svg";

const textMotion = {
  rest: {
    opacity: 1,
    x: 0,
    y: 0,

    transition: {
      duration: 0.8,
      delay: 0.1,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    scale: 1.08,
    opacity: 0.5,
    delay: 1,
    transition: {
      duration: 0.3,
      type: "tween",
      ease: "easeOut",
    },
  },
  initial: { opacity: 0, x: -10, y: -5, delay: 1 },
};

const imageMotion = {
  initial: {
    scale: 0.3,
    opacity: 0,
  },
  rest: {
    scale: 1,
    opacity: 1,

    transition: {
      duration: 0.3,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    scale: 1.05,
    // opacity: 0.5,

    transition: {
      duration: 0.3,
      type: "tween",
      ease: "easeOut",
    },
  },
};

export default function SibebarContents() {
  const pathname = usePathname();
  return (
    <>
      <div className={styles.sidebar}>
        <motion.div
          className={styles.avatar_container}
          whileHover="hover"
          initial="initial"
          animate="rest"
        >
          <motion.div
            className={styles.avatar}
            // initial={{ opacity: 0, x: -10, y: -5 }}
            // animate={{ opacity: 1, x: 0, y: 0 }}
            // transition={{ duration: 0.3 }}
            // hover
            variants={textMotion}
          >
            <Image
              src={Dots}
              className={styles.dots}
              alt="dots-bg"
              width={200}
              height={200}
            />
          </motion.div>
          <motion.div variants={imageMotion} className={styles.featured_image}>
            <Image
              src="https://picsum.photos/200/300"
              alt="avatar"
              width={200}
              height={200}
            />
          </motion.div>
        </motion.div>

        <div className={styles.title_row}>
          <h1>J.P Castillo</h1>
          <h2>software engineer</h2>
        </div>

        <div className={styles.links}>
          <Link
            href="/"
            replace
            className={pathname == "/" ? styles.active : "close_trigger"}
          >
            Home
          </Link>
          <Link
            href="/resume"
            replace
            className={pathname == "/resume" ? styles.active : "close_trigger"}
          >
            Resume
          </Link>
          <Link
            href="#"
            replace
            className={
              pathname == "/portfolio" ? styles.active : "close_trigger"
            }
          >
            Portfolio
          </Link>
        </div>
        <div className={styles.socials}>
          <Link
            href="https://www.linkedin.com/in/alex-smith-1b1b1b1b1/"
            target="_blank"
          >
            <Image src={LinkedIn} alt="linkedin" width={20} height={20} />
          </Link>
          <Link href="#">
            <Image src={Instagram} alt="instagram" width={20} height={20} />
          </Link>
          <Link href="#">
            <Image src={Github} alt="github" width={20} height={20} />
          </Link>
        </div>
        <div className={styles.footer}>
          <p>© 2021 J.P Castillo </p>
        </div>
      </div>
    </>
  );
}
