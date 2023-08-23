"use client";

import React from "react";
import styles from "./home.module.scss";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Home_header() {
  return (
    <div className={styles.home_header}>
      <AnimatePresence initial={true}>
        <div className="grid grid-cols-12 ">
          <div className="col-span-12 md:col-span-5 lg:col-span-12 xl:col-span-5 ">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className={styles.parent}
            >
              <div className={styles.child}>
                <div className={styles.featured_image}>
                  <Image
                    src="https://picsum.photos/200/200"
                    alt="avatar"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </motion.div>
          </div>
          <div className="col-span-12 md:col-span-7 lg:col-span-12 xl:col-span-7">
            <div className={styles.parent}>
              <div className={styles.childTwo}>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className={styles.copy}
                >
                  <h3>Fullstack Developer</h3>
                  <h1>J.P Castillo </h1>
                  <p>
                    I am a Full-Stack Web Developer & Web Designer based in The
                    USA, but working Worldwide. I am passionate about designing
                    and developing user-friendly websites. I have all the skills
                    to create a new high quality website or improve existing
                    websites for individuals and organisations, using the latest
                    techniques and trends.
                  </p>
                  <div className={styles.button_row}>
                    <button className={`drop-shadow-md ${styles.theme_btn}`}>
                      Download{" "}
                    </button>
                    <button
                      className={`drop-shadow-md ${styles.theme_btn_secoundary}`}
                    >
                      Contact
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}
