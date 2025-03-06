import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../Constants";
import { SectionWraper } from "../Utils";

const ServiceCard = ({ index, title, icon }: any) => (
  <div className="w-full xs:w-[250px]">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.2 }}
      className="relative w-full overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#4dba87] to-[#3da876] opacity-20 rounded-[20px]" />
      <div
        className="bg-[#161b22]/80 backdrop-blur-md rounded-[20px] py-6 px-8 min-h-[260px]
                   flex justify-evenly items-center flex-col hover:scale-105 transition-transform duration-300
                   border border-[#4dba87]/20"
      >
        <div className="w-16 h-16 relative">
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
        <h3 className="text-white text-xl font-semibold text-center mt-4">
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 w-full mx-auto px-4 sm:px-8 md:px-12 py-10 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <p className="text-[#4dba87] font-medium mb-2">Introduction</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Overview.</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-gray-300 text-lg w-full mx-auto md:mx-0 leading-relaxed text-center md:text-left"
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
          className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWraper(About, "about");
