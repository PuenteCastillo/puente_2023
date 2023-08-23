"use client";

import { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../page.module.scss";
import { on } from "events";
import { usePathname } from "next/navigation";

export default function PageSlider(props: React.PropsWithChildren<unknown>) {
  // animation toggle

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          className={`content_container bg-white  col-span-12 lg:col-span-8  xl:col-span-9 shadow-lg ${styles.content}`}
          // shake animation
          initial={{ x: -350 }}
          animate={{ x: 0 }}
          // exit={{ x: 100 }}
          transition={{ duration: 0.1 }}
        >
          {props.children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
