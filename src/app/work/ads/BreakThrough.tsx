"use client";

import styles from "../page.module.scss";
import gsap from "gsap";
import { use, useEffect } from "react";
import Image from "next/image";
import Ball from "./breakTrhough/ball.png";
import Cta from "./breakTrhough/cta.png";
import dust from "./breakTrhough/dust.png";
import Logo from "./breakTrhough/logo.png";
import T1 from "./breakTrhough/t1.png";
import T2 from "./breakTrhough/t2.png";

export default function BreakThrough() {
  useEffect(() => {
    var tl = gsap.timeline();
    // find #ad
    var ad: any = document.querySelector("#BreakThrough");
    // remove hide class from #ad after 1 second

    ad.classList.remove("hide");

    tl.from("#BT_logo", 1, { x: -50, ease: "elastic.out(1, 0.3)" });
    tl.add("start,0")
      .fromTo(
        "#ad",
        1.5,
        { clip: "rect(240px,320px,240px,0px)" },
        { clip: "rect(0px,320px,480px,0px)", ease: "power3.Out", delay: 1.5 },
        "start"
      )
      .from(
        "#BT_t1",
        1,
        { opacity: 0, ease: "power3.Out", delay: 0.5 },
        "start"
      )
      .from("#BT_t1", 0.5, { y: -125, ease: "power3.Out", delay: 2 }, "start")
      .from(
        "#BT_t2",
        0.5,
        { y: 50, opacity: 0, ease: "power3.Out", delay: 2.8 },
        "start"
      )
      .from(
        "#BT_ball",
        0.5,
        { x: -500, ease: "power3.Out", delay: 2.1 },
        "start"
      )
      .from(
        "#BT_logo",
        0.5,
        { rotationY: "90deg", opacity: 0, ease: "power3.Out", delay: 3 },
        "start"
      )
      .from(
        "#BT_cta",
        0.5,
        { opacity: 0, ease: "power3.Out", delay: 3.2 },
        "start"
      );

    // double tl speed
    tl.timeScale(2);
    tl.seek(10);

    // on mouse over
    ad.addEventListener("mouseover", function () {
      console.log("mouseover");
      tl.timeScale(2);
      tl.seek(0);

      tl.play();
    });
    // on mouse out
    ad.addEventListener("mouseout", function () {
      // reverse timeline
      tl.timeScale(5);
      tl.seek(10);
    });
  }, []);

  return (
    <>
      <div className={styles.BreakThrough + " "} id="BreakThrough">
        <div id="ad_content">
          <Image id="BT_ball" src={Ball} alt="" className={styles.BT_ball} />
          <Image id="BT_t2" src={T2} alt="" />
          <Image id="BT_t1" src={T1} alt="" />
          <Image id="BT_cta" src={Cta} alt="" />
        </div>

        <Image id="BT_Logo" src={Logo} alt="" />
      </div>
    </>
  );
}
