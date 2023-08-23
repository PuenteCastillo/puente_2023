"use client";

import React from "react";

import Ody from "./ads/Ody";
import Stokelab from "./ads/Stokelab";
import TrippleTrack from "./ads/TrippleTrack";
import Chromesoft from "./ads/Chromesoft";

import { motion, AnimatePresence } from "framer-motion";

const adComponents = [
  { component: <TrippleTrack /> },
  { component: <Chromesoft /> },
  { component: <Ody /> },
];

export default function ad_carousel() {
  return (
    <>
      <AnimatePresence initial={true}>
        <div className="flex flex-nowrap  md:ml-10 ml-0  ">
          {adComponents.map((ad, index) => (
            <div key={index} className="inline-block px-3">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.3 }}
                className="inline-block px-3"
              >
                <div className="max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  {ad.component}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </AnimatePresence>
    </>
  );
}
