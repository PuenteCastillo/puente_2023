"use client";
import React, { use } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import BG from "../../images/main_bg.png";
import Dots from "../../images/dots.png";
import X from "../../images/x.png";

import gsap from "gsap";
import { useEffect } from "react";

export default function Bg_aimations() {
  useEffect(() => {
    // remove hide
    var bg_container_holder: any = document.querySelector(".unhide");

    bg_container_holder.classList.remove("hide");

    gsap.from(".dots", 25, {
      opacity: 0,
      y: 200,
      rotate: 20,
      repeat: -1,
      yoyo: true,
      ease: "power4.InOut",
    });
    gsap.from(".x_bg", 10, {
      //   opacity: 0.8,
      y: 100,
      //   rotate: -5,
      repeat: -1,
      yoyo: true,
      ease: "power4.InOut",
    });
    gsap.from(".main_bg", 40, {
      scale: 1.2,

      repeat: -1,
      yoyo: true,
      ease: "power4.InOut",
    });
  }, []);

  return (
    <>
      <div id="bg_container_holder" className={` ${styles.bg_container}`}>
        <Image
          className={`main_bg ${styles.main_bg}`}
          src={BG}
          alt="background_picture"
        />
        <Image
          className={`dots unhide hide ${styles.main_dots}`}
          src={Dots}
          alt="background_picture"
        />
        <Image
          className={`x_bg unhide hide ${styles.main_dots}`}
          src={X}
          alt="background_picture"
        />
      </div>
    </>
  );
}
