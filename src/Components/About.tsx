import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../Constants";
import { SectionWraper } from "../Utils";

const ServiceCard = ({ index, title, icon }: any) => (
  <div className="w-full">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.2 }}
      className="relative w-full h-full"
    >
      <div
        className="p-6 h-full flex flex-col justify-between hover:scale-105 transition-transform duration-300"
      >
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 relative mb-4">
            <motion.img
              src={icon}
              alt={title}
              className="w-full h-full object-contain"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
            />
          </div>
          <h3 className="text-white text-lg sm:text-xl font-semibold text-center">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  return (
    <div className="flex flex-col w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full text-center mb-6 sm:mb-8"
      >
        <p className="text-[#4dba87] font-medium text-base sm:text-lg mb-2">Introduction</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Overview.</h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-base sm:text-lg text-gray-300 w-full mb-8 sm:mb-12 leading-relaxed text-justify"
      >
        I'm a skilled software developer with experience in{" "}
        <span className="text-[#4dba87]">TypeScript</span> and{" "}
        <span className="text-[#4dba87]">JavaScript</span>, and expertise in frameworks like{" "}
        <span className="text-[#4dba87]">React</span>,{" "}
        <span className="text-[#4dba87]">Node.js</span>, and{" "}
        <span className="text-[#4dba87]">Three.js</span>. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWraper(About, "about");
