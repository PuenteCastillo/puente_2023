import Image from "next/image";
import PageSlider from "../components/PageSlider";
import styles from "./page.module.scss";
import Kbs from "../../../images/projects/kbs_img.webp";
import LittleCaesars from "../../../images/projects/Little_Ceasars.webp";
import Xmiimage from "../../../images/projects/xmiimage.webp";
import Callaway from "../../../images/projects/callaway.webp";
import Drakes from "../../../images/projects/drakes.webp";
import Origin from "../../../images/projects/origenmade.jpeg";

// ads

import Ody from "./ads/Ody";
import Stokelab from "./ads/Stokelab";
import TrippleTrack from "./ads/TrippleTrack";
import Chromesoft from "./ads/Chromesoft";

import Ad_carousel from "./ad_carousel";
import Website_gal from "./website_gal";

export default function work() {
  return (
    <PageSlider>
      <main id="work_container" className={styles.work}>
        <section>
          <h1> Portfolio </h1>
        </section>
        <div id={styles.Advertising}>
          <section id="#ad_container" className="container">
            <h2> Advertising </h2>
            <span className=" text-right justify-end "> -- </span>
          </section>
          <div
            className={`flex overflow-x-scroll pb-10 hide-scroll-bar mt-10 ${styles.hide_scroll}`}
          >
            <Ad_carousel />
          </div>
        </div>

        <div id={styles.Resume_Page}>
          <section className="container">
            <h2> Websites </h2>
            <Website_gal />
          </section>
        </div>
      </main>
    </PageSlider>
  );
}
