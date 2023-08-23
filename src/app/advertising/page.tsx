import PageSlider from "../components/PageSlider";
import styles from "./page.module.scss";
import Ody from "./ads/Ody";
import Stokelab from "./ads/Stokelab";
import TrippleTrack from "./ads/TrippleTrack";
import Chromesoft from "./ads/Chromesoft";

export default function work() {
  return (
    <PageSlider>
      <main id={styles.Advertising} className="container">
        <section className="container">
          <h1> Advertising </h1>
        </section>
        <div
          className={`flex overflow-x-scroll pb-10 hide-scroll-bar mt-10 ${styles.hide_scroll}`}
        >
          <div className="flex flex-nowrap  md:ml-10 ml-10 ">
            <div className="inline-block px-3">
              <div className=" max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <TrippleTrack />
              </div>
            </div>
            <div className="inline-block px-3">
              <div className="max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Chromesoft />
              </div>
            </div>
            <div className="inline-block px-3">
              <div className=" max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Ody />
              </div>
            </div>

            <div className="inline-block px-3">
              <div className=" max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Stokelab />
              </div>
            </div>
            <div className="inline-block px-3">
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
            <div className="inline-block px-3">
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
            <div className="inline-block px-3">
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
            <div className="inline-block px-3">
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            </div>
          </div>
        </div>
      </main>
    </PageSlider>
  );
}
