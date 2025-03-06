import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { experiences } from "../Constants";
import { SectionWraper } from "../Utils";

const TimelineCard = ({ experience }: any) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "rgba(22, 27, 34, 0.8)",
      backdropFilter: "blur(10px)",
      color: "#fff",
      border: "1px solid rgba(77, 186, 135, 0.2)",
      boxShadow: "0 0 20px rgba(77, 186, 135, 0.1)",
      borderRadius: "16px",
      padding: "32px",
      minHeight: "450px",
      height: "auto",
      marginBottom: "2rem"
    }}
    contentArrowStyle={{ borderRight: "7px solid rgba(77, 186, 135, 0.3)" }}
    date={experience.date}
    iconStyle={{
      background: "#161b22",
      border: "2px solid #4dba87",
      boxShadow: "0 0 0 4px rgba(77, 186, 135, 0.2)",
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="pb-4 border-b border-[#4dba87]/20">
        <h3 className="text-white text-2xl font-bold mb-2">{experience.title}</h3>
        <p className="text-[#4dba87] text-lg font-medium">
          {experience.company_name}
        </p>
      </div>
    </motion.div>

    <motion.ul
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="mt-6 space-y-4 max-h-[300px] overflow-y-auto pr-4 custom-scrollbar"
    >
      {experience.points.map((point: string, index: number) => (
        <li
          key={`experience-point-${index}`}
          className="text-gray-300 text-base leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:bg-[#4dba87] before:rounded-full hover:bg-[#4dba87]/5 p-2 rounded-lg transition-colors duration-200"
        >
          {point}
        </li>
      ))}
    </motion.ul>
  </VerticalTimelineElement>
);

function Experience() {
  return (
    <div className="relative min-h-screen overflow-hidden pt-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-10 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center w-full"
        >
          <p className="text-[#4dba87] font-medium mb-2">What I have done so far</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Work Experience.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 md:mt-20"
        >
          <VerticalTimeline animate={true}>
            {experiences.map((experience, index) => (
              <TimelineCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </motion.div>
      </div>
    </div>
  );
}

export default SectionWraper(Experience, "work");

