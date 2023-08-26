"use client";

import React from "react";
import styles from "./home.module.scss";
import Image from "next/image";
import design from "../../../../images/design.png";
import Server from "../../../../images/server.png";
import Mobile from "../../../../images/phone.png";
import Camera from "../../../../images/camera.png";
import Megaphone from "../../../../images/megaphone.png";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    image: design,
    title: "Front End Development",
    description:
      " As a front-end developer, I craft the visual aspects of websites and applications. With a keen eye for design and a strong command over HTML, CSS, and JavaScript, I bring user interfaces to life. I strive to create seamless and engaging user experiences by implementing responsive designs, animations, and interactive elements. My passion for elegant interfaces drives me to stay current with the latest web development trends.",
    delay: 0.5,
  },
  {
    image: Server,
    title: "Backend Development",
    description:
      "Behind every successful digital experience lies a robust backend foundation. As a backend developer, I specialize in building the server-side logic and databases that power applications. My expertise with Node.js MongoDB, Postgres, and SQL allows me to create scalable and secure systems. I design APIs, manage data storage, and ensure efficient communication between the server and the front end. Crafting efficient and reliable backend solutions is my commitment.",
    delay: 0.8,
  },
  {
    image: Mobile,
    title: "Mobile Development",
    description:
      "Mobile devices have become integral to modern life. I'm dedicated to crafting captivating and functional mobile applications. Leveraging frameworks like React Native or Swift, I develop apps that seamlessly run across various platforms. My focus on user experience and performance optimization ensures that users enjoy smooth interactions and top-notch functionality on their smartphones and tablets.",
    delay: 1,
  },
  {
    image: Megaphone,

    title: "Advertising",
    description:
      "In the digital age, effective advertising requires a blend of creativity and technical finesse. As an advertising enthusiast, I excel at creating compelling campaigns that reach the right audience. Through strategic use of platforms like Google Ads, social media, and content marketing, I help businesses increase their visibility and drive engagement. I believe that each ad should tell a story and inspire action, and I work tirelessly to achieve that goal.",
    delay: 1.3,
  },
  {
    image: Camera,
    title: "Photo/ Video",
    description:
      "Photography and videography are powerful mediums for capturing moments and conveying messages. With an artistic eye and technical proficiency, I create visual content that resonates. Whether it's a captivating photo that tells a story or a video that engages and educates, I understand the importance of imagery in today's digital landscape. I utilize modern tools and techniques to produce visuals that leave a lasting impact.",
    delay: 1.6,
  },
];

export default function What_i_do() {
  return (
    <section className={styles.what_i_do}>
      <AnimatePresence initial={true}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          What <span> I Do</span>
        </motion.h2>
      </AnimatePresence>
      <div className="grid grid-cols-12">
        <AnimatePresence initial={true}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: service.delay }}
              className={`col-span-12 md:col-span-6 ${styles.box_content}`}
            >
              <div className={styles.content}>
                <Image src={service.image} alt={service.title} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
