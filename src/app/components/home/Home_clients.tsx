import React from "react";
import styles from "./home.module.scss";
import Image from "next/image";
import Callaway from "../../../../images/clients/callaway.png";
import Kbs from "../../../../images/clients/KBS.png";
import Little_caesars from "../../../../images/clients/little_caesars.png";
import Qualcomm from "../../../../images/clients/qualcomm.png";
import Qualtrics from "../../../../images/clients/qualtrics.png";

export default function Home_clients() {
  return (
    <section id={styles.Home_clients} className={styles.section_div}>
      <h2>
        Clients <span> I work With</span>
      </h2>
      <div className=" mt-16">
        <div className="grid grid-cols-2 md:grid-cols-5">
          <div className={` flex border-r-2 mb-16 h-24`}>
            <Image src={Callaway} alt="Callaway" className=" m-auto" />
          </div>
          <div className={`flex  md:border-r-2  mb-16`}>
            <Image src={Kbs} alt="Kbs" className=" m-auto" />
          </div>

          <div className={`flex border-r-2  mb-16 h-24`}>
            <Image src={Qualtrics} alt="Qualtrics" className=" m-auto" />
          </div>
          <div className={`flex md:border-r-2  mb-16 h-24`}>
            <Image
              src={Little_caesars}
              alt="Little_caesars"
              className=" m-auto"
            />
          </div>
          <div className={`flex mb-16 border-r-2 md:border-r-0 h-24`}>
            <Image src={Qualcomm} alt="Qualcomm" className=" m-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
