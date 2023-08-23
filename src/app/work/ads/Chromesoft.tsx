"use client";

import styles from "../page.module.scss";
import gsap from "gsap";
import { use, useEffect } from "react";
import Image from "next/image";
import ball from "./chromesoft/ball.png";
import Cta1 from "./chromesoft/cta1.png";
import Cta2 from "./chromesoft/cta2.png";
import Line from "./chromesoft/line.png";
import Logo from "./chromesoft/logo.png";
import Logo2 from "./chromesoft/logo2.png";
import O1 from "./chromesoft/o1.png";
import O2 from "./chromesoft/o2.png";
import T1 from "./chromesoft/t1.png";
import T2 from "./chromesoft/t2.png";
import T3 from "./chromesoft/t3.png";

export default function Chromesoft() {
  useEffect(() => {
    var tl = gsap.timeline();
    // find #ad
    var ad: any = document.querySelector("#Chromesoft");
    // remove hide class from #ad after 1 second
    ad.classList.remove("hide");

    tl.add("start", 0.5)
      .add("text", 0.7)
      .add("logoCta", 1)
      .from("#CS_o1", 0.5, { opacity: 0, x: 15, scale: 0.8 }, "start")
      .from(
        "#CS_t1",
        0.5,
        { opacity: 0, scale: 0.8, y: 20, x: -10, delay: 0 },
        "text"
      )
      .from(
        "#CS_t2",
        0.5,
        { opacity: 0, scale: 0.8, y: 20, x: -10, delay: 0.4 },
        "text"
      )
      .from(
        "#CS_t3",
        0.5,
        { opacity: 0, scale: 0.8, y: 20, x: -10, delay: 0.8 },
        "text"
      )
      .from(
        "#CS_o2",
        0.5,
        { opacity: 0, scale: 0.8, x: -15, delay: 0 },
        "start"
      )
      .from(
        "#CS_ball",
        0.5,
        { opacity: 0, scale: 0.8, x: -15, y: -15, delay: 0 },
        "start"
      )
      .from("#CS_logo2", 1, { x: -200 }, "logoCta")
      .to("#CS_cta", 1, { clip: "rect(0px,320px,480px,0px)" }, "logoCta")
      .to("#CS_cta2", 0.8, { clip: "rect(0px,320px,480px,0px)" }, "logoCta");

    // double tl speed
    // tl.timeScale(2);
    tl.seek(10);

    // on mouse over
    ad.addEventListener("mouseover", function () {
      console.log("mouseover");
      // tl.timeScale(2);
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
      <div className={styles.ChromesoftBox + " hide "} id="Chromesoft">
        <div id="ad_content">
          <Image id="CS_o1" className="obj" src={O1} alt="" />
          <Image id="CS_o2" className="obj" src={O2} alt="" />
          <Image id="CS_t1" src={T1} alt="" />
          <Image id="CS_t2" src={T2} alt="" />
          <Image id="CS_t3" src={T3} alt="" />
          <Image id="CS_ball" src={ball} alt="" />
          {/* <Image src={Line} alt="" />
          <div id={styles.cta1}>
            <Image
              id="CS_logo2"
              className={styles.CS_logo2}
              src={Logo2}
              alt=""
            />
          </div> */}
          <Image id="CS_cta" className={styles.move_down} src={Cta1} alt="" />
          <Image id="CS_cta2" className={styles.move_down} src={Cta2} alt="" />
        </div>
        <Image id="CS_logo" className="mt-3" src={Logo} alt="" />
      </div>
    </>
  );
}
