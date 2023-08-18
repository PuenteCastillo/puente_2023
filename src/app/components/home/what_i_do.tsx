import React from "react";
import styles from "./home.module.scss";
import Image from "next/image";
import design from "../../../../images/design.png";
import Server from "../../../../images/server.png";
import Mobile from "../../../../images/phone.png";
import Camera from "../../../../images/camera.png";
import { motion } from "framer-motion";

export default function What_i_do() {
  return (
    <section className={styles.what_i_do}>
      <h2>
        What <span> I Do</span>
      </h2>
      <div className="grid grid-cols-12">
        <div className={`col-span-12 md:col-span-6 ${styles.box_content}`}>
          <motion.div className={styles.content}>
            <Image src={design} alt="design" />
            <h3> Front End Development </h3>
            <p>
              Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
              tortor bibendum massa, sit amet ultricies ex lectus scelerisque
              nibh. Ut non sodales.
            </p>
          </motion.div>
        </div>

        <div className={`col-span-12 md:col-span-6 ${styles.box_content}`}>
          <div className={styles.content}>
            <Image src={Server} alt="Server" />
            <h3> Backend Development </h3>
            <p>
              Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
              tortor bibendum massa, sit amet ultricies ex lectus scelerisque
              nibh. Ut non sodales.
            </p>
          </div>
        </div>

        <div className={`col-span-12 md:col-span-6 ${styles.box_content}`}>
          <div className={styles.content}>
            <Image src={Mobile} alt="Mobile" />
            <h3> Mobile Development </h3>
            <p>
              Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
              tortor bibendum massa, sit amet ultricies ex lectus scelerisque
              nibh. Ut non sodales.
            </p>
          </div>
        </div>

        <div className={`col-span-12 md:col-span-6 ${styles.box_content}`}>
          <div className={styles.content}>
            <Image src={Camera} alt="Camera" />
            <h3> Photo/ Video </h3>
            <p>
              Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
              tortor bibendum massa, sit amet ultricies ex lectus scelerisque
              nibh. Ut non sodales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
