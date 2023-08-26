"use client";
import Image from "next/image";
import PageSlider from "../components/PageSlider";
import styles from "./page.module.scss";

import Content_box from "./components/Content_box";
import { motion, AnimatePresence, stagger } from "framer-motion";

const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "PHP",
  "MongoDB",
  "SQL",
  "Express",
  "Postgress",
  "React",
  "Node",
  "jquery",
  "Next.js",
  "SASS",
  "Tailwind",
  "Bootstrap",
  "Wordpress",
  "github",
  "Heroku",
  "AWS",
  " Green Sock",
  " Framer Motion ",
  "And more ... ",
];

const designSkills = [
  "UI / UX",
  "Adobe XD",
  "Photoshop",
  "Illustrator",
  "Lightroom",
  "Premiere",
  "After Effects",
  "paint",
  "And more ...",
];

const listAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      staggerChildren: 0.5,
    },
  },
};

export default function resume() {
  return (
    <PageSlider>
      <main id={styles.Resume_Page}>
        <section className="container">
          <h1> Resume</h1>
        </section>
        <section>
          <div className="container">
            <div className=" grid grid-cols-12">
              <div className="col-span-12 md:col-span-7 ">
                <h2>Experience</h2>
                <Content_box
                  date="2022-2023"
                  title="Dough. Agency"
                  titleTwo="Sernior Developer"
                  description="Developed multiple Web Applications for clients. Worked closely with designers and developers. "
                  delay={0.1}
                />

                <Content_box
                  date="2017-2022"
                  title="Taco Truck Creative Agency"
                  titleTwo="Sernior Developer"
                  description="Developed a wide variety of websites and applications for clients. Experience with React, SQL, Node, and more. Worked and managed many developers and designers."
                  delay={0.2}
                />

                <Content_box
                  date="2023-2017"
                  title="The Crab Cooker"
                  titleTwo="Server"
                  description="Not all can be code... At the Crabcooker I worked as a seerver. I learned a lot about customer service and how to work with a team."
                  delay={0.3}
                />

                <h2 className="mt-10 md:mt-0 ">Education</h2>
                <Content_box
                  date="2017"
                  title="University of California Irvine"
                  titleTwo="FullStack Development"
                  description=" At UCI I learned the fundamentals of web development. I learned how to work with a team and how to work with clients. I learned how to work with a team and how to work with clients."
                  delay={0.4}
                />
                <Content_box
                  date="2015"
                  title="Orange Coast College"
                  titleTwo="Marketing and Business"
                  description=" At OCC I learned the importance of marketing and the power of interpersonal skills. You can create the best product in the world but with out a good marketing strategy it will never be seen."
                  delay={0.5}
                />
              </div>

              <div className=" mt-10 md:mt-0 mb-10 col-span-12 md:col-span-5 ">
                <h2> Coding Skills</h2>
                <AnimatePresence initial={true}>
                  <div className="  flex flex-wrap mt-5">
                    {skills.map((skill, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1, delay: index * 0.04 }}
                        className={styles.skill}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                  <h2 className=" mt-10"> Design Skills</h2>
                  <div className="  flex flex-wrap mt-5">
                    {designSkills.map((skill, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1, delay: index * 0.05 }}
                        className={styles.skill}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageSlider>
  );
}
