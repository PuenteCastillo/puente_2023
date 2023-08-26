import Image from "next/image";
import PageSlider from "../components/PageSlider";
import styles from "./page.module.scss";
import Arrow from "../../../images/arrow-right-solid.svg";

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
          <section
            id="#ad_container"
            className="container flex justify-between"
          >
            <div>
              <h2> Advertising </h2>
            </div>

            <div className=" flex  content-center opacity-40">
              <p className="  pt-1">Scroll</p>
              <Image
                src={Arrow}
                alt="arrow"
                width={15}
                height={15}
                className="ml-3"
              />
            </div>
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
