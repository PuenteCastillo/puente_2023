"use client";
import Image from "next/image";
import PageSlider from "../components/PageSlider";
import styles from "./page.module.scss";

import Content_box from "./components/Content_box";

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
                />

                <Content_box
                  date="2017-2022"
                  title="Taco Truck Creative Agency"
                  titleTwo="Sernior Developer"
                  description="Developed a wide variety of websites and applications for clients. Experience with React, SQL, Node, and more. Worked and managed many developers and designers."
                />

                <Content_box
                  date="2023-2017"
                  title="The Crab Cooker"
                  titleTwo="Server"
                  description="Not all can be Code... At the Crabcooker i worked as a seerver. I learned a lot about customer service and how to work with a team."
                />

                <h2 className="mt-10 md:mt-0 ">Education</h2>
                <Content_box
                  date="2017"
                  title="University of California Irvine"
                  titleTwo="FullStack Development"
                  description="Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor
            aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,
            lobortis ante."
                />
                <Content_box
                  date="2015"
                  title="Orange Coast College"
                  titleTwo="Marketing and Business"
                  description="Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor
            aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,
            lobortis ante."
                />
              </div>

              <div className=" mt-10 md:mt-0 mb-10 col-span-12 md:col-span-5 ">
                <h2> Coding Skills</h2>
                <div className="  flex flex-wrap mt-5">
                  <span className={styles.skill}>JavaScript</span>
                  <span className={styles.skill}>HTML</span>
                  <span className={styles.skill}>CSS</span>
                  <span className={styles.skill}>PHP</span>
                  <span className={styles.skill}>MongoDB</span>
                  <span className={styles.skill}>SQL</span>
                  <span className={styles.skill}>Express</span>
                  <span className={styles.skill}>Postgress</span>
                  <span className={styles.skill}>React</span>
                  <span className={styles.skill}>Node</span>
                  <span className={styles.skill}>jquery</span>
                  <span className={styles.skill}>Next.js</span>
                  <span className={styles.skill}>SASS</span>
                  <span className={styles.skill}>Tailwind</span>
                  <span className={styles.skill}>Bootstrap</span>
                  <span className={styles.skill}>Wordpress</span>
                  <span className={styles.skill}>github</span>
                  <span className={styles.skill}>Heroku</span>
                  <span className={styles.skill}>AWS</span>
                  <span className={styles.skill}> Green Sock</span>
                  <span className={styles.skill}> Framer Motion </span>
                  <span className={styles.skill}> And more ... </span>
                </div>
                <h2 className=" mt-10"> Design Skills</h2>
                <div className="  flex flex-wrap mt-5">
                  <span className={styles.skill}>UI / UX</span>
                  <span className={styles.skill}>Adobe XD</span>
                  <span className={styles.skill}>Photoshop</span>
                  <span className={styles.skill}>Illustrator</span>
                  <span className={styles.skill}>Lightroom</span>
                  <span className={styles.skill}>Premiere</span>
                  <span className={styles.skill}>After Effects</span>
                  <span className={styles.skill}>paint</span>
                  <span className={styles.skill}>And more ...</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageSlider>
  );
}
