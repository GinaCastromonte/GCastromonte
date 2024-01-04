"use client";

import React, { useState ,useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import {motion, useInView} from "framer-motion"

const projectsData = [
  {
    id: 1,
    title: "Synergy Connect",
    description:
      "Designed and developed features to enhance user communication and collaboration, including real-time messaging, task management, and video conferencing, resulting in improved connectivity and productivity.",
    image: "/images/projects/SynergyConnect.png",
    tag: ["All", "Web"],
    gitUrl: " https://github.com/team-fun/SynergyConnect",
    previewUrl: " https://synergyconnect-front.onrender.com/ ",
  },
  {
    id: 2,
    title: "Animerch",
    description:
      "This project involved the development of an e-commerce website, where a collaborative and motivated work environment was cultivated, cross-functional communication facilitated, code reviews conducted, and technologies like HTML5, CSS, JavaScript, and Node.js were utilized to create an intuitive and visually captivating online shopping platform, resulting in improved teamwork, higher morale, increased productivity, enhanced project efficiency, reduced errors, and accelerated development timelines ",
    image: "/images/projects/Animerch.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Team-ShenaniGAINS/graceshopper-project",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Campus Directory",
    description:
      "The project centered around the creation of a campus directory website, leveraging a technology stack that included Tailwind CSS, Node.js, Express, JavaScript, React, and Redux. This initiative aimed to provide a user-friendly platform for accessing comprehensive information about campus resources and individuals. By utilizing Tailwind CSS for responsive and visually appealing design, along with Node.js and Express for robust server-side functionalities, we ensured efficient data retrieval and management.",
    image: "/images/projects/Campusdirectory.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GinaCastromonte/CampusDirectory ",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "SODOTO",
    description:
      "The project centered around the creation of a campus directory website, leveraging a technology stack that included Tailwind CSS, Node.js, Express, JavaScript, React, and Redux. This initiative aimed to provide a user-friendly platform for accessing comprehensive information about campus resources and individuals. By utilizing Tailwind CSS for responsive and visually appealing design, along with Node.js and Express for robust server-side functionalities, we ensured efficient data retrieval and management.",
    image: "/images/projects/Campusdirectory.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GinaCastromonte/CampusDirectory ",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Drone Page",
    description:
      "This project leveraged the power of CSS to bring a static image of a drone to life, making it appear as if it were hovering and gliding gracefully across the screen. By utilizing various CSS animations and transitions, we achieved a visually engaging effect that drew users' attention and added an element of dynamism to the landing page. ",
    image: "/images/projects/drone.png",
    tag: ["All"],
    gitUrl: "https://github.com/GinaCastromonte/Drone",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const ref = useRef(null)
  const isInView = useInView(ref, {once:true})
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  )

  const cardVariants = {
    initial:{y:50,opacity:0},
    animate: {y:0 , opacity:1}
  }

  return (
    <div id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition = {{duration: 0.3, delay:index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}{" "}
      </ul>
    </div>
  );
};

export default ProjectsSection;
