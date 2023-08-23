"use client";

import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Kbs from "../../../images/projects/kbs_img.webp";
import LittleCaesars from "../../../images/projects/Little_Ceasars.webp";
import Xmiimage from "../../../images/projects/xmiimage.webp";
import Callaway from "../../../images/projects/callaway.webp";
import Drakes from "../../../images/projects/drakes.webp";
import Origin from "../../../images/projects/origenmade.jpeg";

const projects = [
  { name: "KBS", link: "https://kbsgolfshafts.com/", image: Kbs },
  { name: "Drakes", link: "https://drakesorganic.com/", image: Drakes },
  { name: "Qualtrics", link: "https://www.xminstitute.com/", image: Xmiimage },
  { name: "Origin", link: "https://origenmade.com/", image: Origin },
  { name: "Callaway", image: Callaway, isButton: true },
  { name: "Little Caesars", link: "#", image: LittleCaesars },
];

export default function website_gal() {
  function handleScroll() {
    // scroll to top of #work_container
    const work_container: any = document.querySelector("#work_container");
    work_container.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="grid grid-col-2 md:grid-cols-3 gap-5 mt-10 mb-20">
      {projects.map((project, index) => (
        <React.Fragment key={index}>
          {project.link ? (
            <Link
              href={project.link}
              target="_blank"
              className="project_container mt-5"
            >
              <div className="img-container h-64 w-100 rounded-md overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  className="object-cover hover:scale-110 transition-all duration-500 ease-in-out  h-64 "
                />
              </div>
              <h3>{project.name}</h3>
            </Link>
          ) : (
            <button onClick={handleScroll} className="project_container mt-5">
              <div className="img-container h-64 w-100 rounded-md overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  className="object-cover hover:scale-110 transition-all duration-500 ease-in-out h-64"
                />
              </div>
              <h3>{project.name}</h3>
            </button>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
