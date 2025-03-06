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
      color: '#fff',
      border: '1px solid rgba(77, 186, 135, 0.2)',
      borderRadius: '16px',
      padding: '1.5rem',
      minHeight: 'auto',
      height: '100%',
      marginBottom: '1rem',
      background: 'transparent'
    }}
    contentArrowStyle={{ borderRight: '7px solid rgba(77, 186, 135, 0.2)' }}
    date={experience.date}
    iconStyle={{
      background: 'transparent',
      border: '1px solid rgba(77, 186, 135, 0.3)',
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
      <div className="pb-3 border-b border-[#4dba87]/20">
        <h3 className="text-lg sm:text-xl font-bold mb-1">{experience.title}</h3>
        <p className="text-[#4dba87] text-base font-medium">
          {experience.company_name}
        </p>
      </div>
    </motion.div>

    <motion.ul
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="mt-3 space-y-2 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar"
    >
      {experience.points.map((point: string, index: number) => (
        <li
          key={`experience-point-${index}`}
          className="text-gray-300 text-sm sm:text-base leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-[#4dba87] before:rounded-full hover:bg-[#4dba87]/5 p-1 rounded-lg transition-colors duration-200"
        >
          {point}
        </li>
      ))}
    </motion.ul>
  </VerticalTimelineElement>
);

function Experience() {
  return (
    <div className="flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6 sm:mb-8"
      >
        <p className="text-[#4dba87] font-medium text-base sm:text-lg mb-2">What I have done so far</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Work Experience.</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full"
      >
        <VerticalTimeline animate={true}>
          {experiences.map((experience, index) => (
            <TimelineCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </motion.div>
    </div>
  );
}

export default SectionWraper(Experience, "work");
