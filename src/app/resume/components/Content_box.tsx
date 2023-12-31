"use client";

import React from "react";
import styles from "../page.module.scss";
import { motion, AnimatePresence } from "framer-motion";

export default function Content_box({
  date,
  title,
  titleTwo,
  description,
  delay,
}: {
  date: string;
  title: string;
  titleTwo: string;
  description: string;
  delay: number;
}) {
  return (
    <>
      <AnimatePresence initial={true}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: delay }}
          className="grid grid-cols-12 mt-5 mb-5"
        >
          <div className="col-span-4 md:col-span-3  px-5">
            <h4 className=" text-right ">{date}</h4>
            <small className=" text-right  mt-2 ">{title}</small>
          </div>
          <div className="col-span-8 md:col-span-9 px-5 relative">
            <div className={styles.divider}></div>
            <h3 className=" text-left ">{titleTwo} </h3>
            <p className=" text-left mt-2">{description}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
