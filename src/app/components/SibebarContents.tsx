"use client";

import React from "react";
import Image from "next/image";
import Dots from "../../../images/dotpattern.jpeg";
import styles from "./mobile_sidebar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, stagger } from "framer-motion";
import Me from "../../../images/memyselfandI.webp";

import LinkedIn from "../../../images/linkedin-in.svg";
import Instagram from "../../../images/instagram.svg";
import Github from "../../../images/github.svg";

import Pin from "../../../images/location-pin-solid.svg";
import Phone from "../../../images/phone-solid.svg";
import Email from "../../../images/envelope-solid.svg";

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

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

export default function SibebarContents() {
  const pathname = usePathname();
  return (
    <>
      <div className={styles.sidebar}>
        <Link href="/">
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
            <motion.div
              variants={imageMotion}
              className={styles.featured_image}
            >
              <Image src={Me} alt="avatar" width={200} height={250} />
            </motion.div>
          </motion.div>
        </Link>
        <motion.div
          initial={{
            opacity: 0,
            y: 5,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.3,
              delay: 0.1,
              type: "tween",
              ease: "easeIn",
            },
          }}
          className={styles.title_row}
        >
          <h1>J.P Castillo</h1>
          <h2>software engineer</h2>
        </motion.div>

        <div className={styles.links}>
          <motion.div
            initial={{
              opacity: 0,
              y: 5,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3,
                delay: 0.1,
                type: "tween",
                ease: "easeIn",
              },
            }}
          >
            <Link
              href="/"
              replace
              className={pathname == "/" ? styles.active : "close_trigger"}
            >
              Home
            </Link>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 5,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3,
                delay: 0.3,
                type: "tween",
                ease: "easeIn",
              },
            }}
          >
            <Link
              href="/resume"
              replace
              className={
                pathname == "/resume" ? styles.active : "close_trigger"
              }
            >
              Resume
            </Link>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 5,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3,
                delay: 0.6,
                type: "tween",
                ease: "easeIn",
              },
            }}
          >
            <Link
              href="/work"
              replace
              className={
                pathname == "/work" ? styles.active : "close_triggerTwo"
              }
            >
              Portfolio
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            y: 5,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.3,
              delay: 0.9,
              type: "tween",
              ease: "easeIn",
            },
          }}
          className={styles.socials}
        >
          <Link
            href="https://www.linkedin.com/in/puentecastillo//"
            target="_blank"
          >
            <Image src={LinkedIn} alt="linkedin" width={20} height={20} />
          </Link>
          <Link
            href="https://instagram.com/polaroid_puente?igshid=MmIzYWVlNDQ5Yg=="
            target="_blank"
          >
            <Image src={Instagram} alt="instagram" width={20} height={20} />
          </Link>
          <Link href="https://github.com/PuenteCastillo" target="_blank">
            <Image src={Github} alt="github" width={20} height={20} />
          </Link>
        </motion.div>

        <div className={styles.footer}>
          <div className="container mt-20">
            <div className={styles.contact_info}>
              <Link
                href="mailto:josepuente2013@gmail.com?subject=Hey%2C%20JP%20Nice%20Website!%20Let's%20chat.."
                className="flex mt-5 md:mt-8 text-white"
              >
                <Image src={Email} alt="Email" width={15} height={15} />
                <p className="ml-3">josepuente2013@gmail.com</p>
              </Link>
              <Link
                href="tel:9494660042"
                className="flex mt-5 md:mt-8 text-white"
              >
                <Image src={Phone} alt="Phone" width={15} height={15} />
                <p className="ml-3"> 949 466 0042 </p>
              </Link>
              <div className="flex mt-5 md:mt-8 text-white">
                <Image
                  src={Pin}
                  alt="Pin"
                  width={15}
                  height={15}
                  className=""
                />
                <p className="ml-3"> Planet Earth </p>
              </div>
              <p className="mt-5 md:mt-8">© 2021 J.P Castillo </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
