"use client";

import styles from "../page.module.scss";
import gsap from "gsap";
import { use, useEffect } from "react";
import Image from "next/image";
import Ball from "./tripple_track/ball.png";
import Cta from "./tripple_track/cta.png";
// import Cta2 from "./cta/cta2.png";
import Lines from "./tripple_track/lines.png";
import Logo from "./tripple_track/logo.png";
import Logo2 from "./tripple_track/logo2.png";
import T1 from "./tripple_track/t1.png";
import Putter from "./tripple_track/putter.png";

export default function TrippleTrack() {
  useEffect(() => {
    var tl = gsap.timeline();
    // find #ad
    var ad: any = document.querySelector("#TrippleTrack");
    // remove hide class from #ad after 1 second

    ad.classList.remove("hide");

    tl.add("start", 0.5)
      .add("phase2", 3.5)
      .from("#TT_putter", 0.5, { opacity: 0 })
      .from(
        "#TT_putter",
        2,
        {
          rotation: 25,
          transformOrigin: "160px 260px",
          ease: "power4.in0ut",
          // repeat: 2,
          // yoyo: true,
        },
        "start"
      )
      .fromTo(
        "#TT_lines",
        1,
        { clip: "rect(0px,0px,0px,0px)", delay: 2 },
        { clip: "rect(0px,320px,480px,0px)", ease: "power4.out" }
      )
      .from("#TT_logo2", 2, { opacity: 0 }, "phase2")
      .from("#TT_cta", 2, { opacity: 0, delay: 2 }, "phase2")
      .from("#TT_t1", 2, { opacity: 0, y: 5 }, "phase2");

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
      <div className={styles.TrippleTrackBox + " hide "} id="TrippleTrack">
        <div id="ad_content">
          <Image id="TT_lines" src={Lines} alt="" />
          <Image id="TT_ball" src={Ball} alt="" />
          <Image id="TT_putter" src={Putter} alt="" />
          <Image id="TT_t1" src={T1} alt="" />
          <Image id="TT_logo2" src={Logo2} alt="" />
          <Image id="TT_cta" src={Cta} alt="" />
        </div>
        <Image id="TT_logo" src={Logo} alt="" />
      </div>
    </>
  );
}
