"use client";

import styles from "../page.module.scss";
import gsap from "gsap";
import { use, useEffect } from "react";
import Image from "next/image";
import Club from "./ody_images/club.png";
import Wide_conv from "./ody_images/300x600_double-wide_conv.png";
import Black from "./ody_images/black.png";
import Shaft from "./ody_images/shaft.png";
import D1 from "./ody_images/d1.png";
import D2 from "./ody_images/d2.png";
import T2 from "./ody_images/t2.png";
import T2d2 from "./ody_images/t2d2.png";
import Cta from "./ody_images/cta.png";
import Cta2 from "./ody_images/cta2.png";
import Logo from "./ody_images/logo.png";
import T1 from "./ody_images/T1.png";

export default function Ody() {
  useEffect(() => {
    var tl = gsap.timeline();
    // find #ad
    var ad: any = document.querySelector(".ad");
    // remove hide class from #ad after 1 second
    setTimeout(() => {
      ad.classList.remove("hide");
    }, 1000);

    tl.add("start", 0)

      .to("#yello", 1, { y: -180, ease: "power1.out" }, "start")
      .to("#black", 1, { y: 150, ease: "power1.out" }, "start")
      .fromTo("#shaft", 1, { x: -200 }, { x: 15 }, "start")

      .add("marker1", 1)
      .from("#t2", 1, { opacity: 0, delay: 1 }, "marker1")
      .from(
        "#t2d2",
        0.2,
        { opacity: 0, repeat: 2, yoyo: true, delay: 1.3 },
        "marker1"
      )
      .add("text2", 4)
      .to("#shaft", 0.8, { x: -200, delay: 0.5 }, "text2")
      .from("#logo", 1, { opacity: 0, delay: 1 }, "text2")
      .from("#club", 0.8, { x: -300, y: 50, scale: 1, delay: 0.8 }, "text2")
      .to("#t2", 0.5, { opacity: 0, delay: 0.3 }, "text2")
      .to("#t2d2", 0.2, { opacity: 0, repeat: 2, yoyo: true }, "text2")
      .from("#t1", 1, { opacity: 0, delay: 1.5 }, "text2")
      .from("#d1", 1, { opacity: 0, delay: 1.5 }, "text2")
      .from(
        "#d2",
        0.2,
        { opacity: 0, repeat: 2, yoyo: true, delay: 1.5 },
        "text2"
      );
    // double tl speed
    tl.timeScale(2);
    tl.seek(10);

    // on mouse over
    ad.addEventListener("mouseover", function () {
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
      <div className={styles.box + " hide ad "} id="ad">
        <Image src={Club} alt="Club" id="club" />
        <Image src={T1} alt="T1" id="t1" />
        <Image src={Wide_conv} alt="Wide_conv" id="yello" />
        <Image src={Black} alt="Black" id="black" />

        <div id="ad_content">
          <Image src={Shaft} alt="Shaft" id="shaft" />
          <Image src={D1} alt="D1" id="d1" />
          <Image src={D2} alt="D2" id="d2" />
          <Image src={T2} alt="T2" id="t2" />
          <Image src={T2d2} alt="T2d2" id="t2d2" />
          <Image src={Cta} alt="Cta" id="cta" />
          <Image src={Cta2} alt="Cta2" id="cta2" />
          <Image src={Logo} alt="Logo" id="logo" />
        </div>
      </div>
    </>
  );
}
