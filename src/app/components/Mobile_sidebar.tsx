"use client";

import React from "react";
import styles from "./mobile_sidebar.module.scss";
import SibebarContents from "./SibebarContents";
import { useState, useEffect } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

export default function Mobile_sidebar() {
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    // when '.content_container' is clicked, close sidebar

    let content_container =
      document.querySelector(".content_container") || undefined;
    let close_trigger = document.querySelector(".close_trigger") || undefined;

    content_container?.addEventListener("click", () => {
      setSidebar(false);
    });

    close_trigger?.addEventListener("click", () => {
      setSidebar(false);
    });

    // document
    //   .querySelector(".content_container")
    //   .addEventListener("click", () => {
    //     setSidebar(false);
    //     console.log("clicked");
    //   });
  });

  function toggleSidebar() {
    setSidebar(!sidebar);
  }

  function closeSidebar() {
    setSidebar(false);
  }

  return (
    <div className="">
      <div className={styles.mobile_nav}>
        <button className={styles.mobile_nav_button} onClick={toggleSidebar}>
          <Hamburger
            // className={styles.hamburger}
            toggled={sidebar}
            toggle={setSidebar}
            color="#fff"
            size={20}
          />
        </button>
      </div>
      <motion.div
        className={styles.mobile_sidebar}
        initial={{ x: 0, scale: 0 }}
        animate={
          sidebar
            ? { x: 0, scale: 1 }
            : {
                scale: 0,

                originY: 0.03,
                originX: 0.08,

                borderRadius: "35%",
              }
        }
        transition={{
          duration: 0.03,
          type: "tween",
          ease: "easeOut",
        }}
      >
        <SibebarContents />
      </motion.div>
    </div>
  );
}
