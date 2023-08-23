"use client";

import styles from "../page.module.scss";
import gsap from "gsap";
import { use, useEffect } from "react";
import Image from "next/image";
import Club from "./strokelab/club.png";
import Cta from "./strokelab/cta.png";
import Cta2 from "./strokelab/cta2.png";
import Greytab from "./strokelab/greyTab.png";
import T1 from "./strokelab/t1.png";
import Logo from "./strokelab/logo.png";
import { DrawSVGPlugin } from "gsap-trial/dist/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export default function Ody() {
  useEffect(() => {
    var tl = gsap.timeline();
    // find #ad
    var ad: any = document.querySelector("#stokelab");
    // remove hide class from #ad after 1 second
    setTimeout(() => {
      ad.classList.remove("hide");
    }, 1000);

    tl.add("start", 0)
      .to(".SL_bg", 0, { rotation: 45 })
      .from(".SL_bg", 1, { x: -600, y: -600, ease: "power4.InOut" })
      .from("#SL_grey", 0, { opacity: 0 })
      .to(".SL_bg", 1, { x: 600, y: 600 })
      .to("#ST_cta2", 0, {
        clip: "rect(0px,240x,320px,240px)",
      })
      .from("#SL_s1", 1, { drawSVG: 0, ease: "power4.InOut" })
      .from("#SL_text", 1, { opacity: 0 })
      .from("#SL_club", 0.5, { x: -350 })
      .from("#SL_cta", 2, { opacity: 0 });

    // double tl speed
    tl.timeScale(1.8);
    tl.seek(10);

    // on mouse over
    ad.addEventListener("mouseover", function () {
      console.log("mouseover");
      tl.timeScale(1.5);
      tl.seek(0);

      tl.play();
    });
    // on mouse out
    ad.addEventListener("mouseout", function () {
      // reverse timeline
      // tl.timeScale(5);
      tl.seek(10);
    });
  }, []);

  return (
    <>
      <div className={styles.stokelabBox + " hide "} id="stokelab">
        <div id="ad_content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            width="4.181in"
            height="3.486in"
          >
            <rect
              x="2313"
              y="228"
              width="300"
              height="250"
              fill="white"
              fill-opacity="0.0"
            />
            <path
              id="SL_s1"
              fill-rule="evenodd"
              stroke="rgb(0, 0, 0)"
              stroke-width="2px"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              fill="none"
              d="M10.000,9.999 L290.000,9.999 L290.000,239.999 L10.000,239.999 L10.000,9.999 Z"
            />
          </svg>

          <Image id="SL_grey" className="" src={Greytab} alt="" />
          <div id={styles.stokelab_bg} className="SL_bg"></div>
          <Image id="SL_club" src={Club} alt="" />
          <Image id="SL_text" src={T1} alt="" />
          <Image id="SL_cta" src={Cta} alt="" />
          <Image id="SL_cta2" src={Cta2} alt="" />
        </div>
        <Image id="SL_logo" src={Logo} alt="" />
      </div>
    </>
  );
}
