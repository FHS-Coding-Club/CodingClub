import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const slideInVariant = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 10, delay: 0.3 },
  },
};

const textSlideInVariant = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

const ProjectCard = ({ index, name, description, image,  }) => {
  return (
    <motion.div
      variants={slideInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="bg-[#242625] p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="mt-20">
      <motion.div
        variants={textSlideInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="text-center"
      >
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="flex flex-wrap gap-7 justify-center mt-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
