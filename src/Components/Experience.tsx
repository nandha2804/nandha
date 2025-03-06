import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../Constants";
import { SectionWraper } from "../Utils";

const TimelineCard = ({ experience }: any) => (
  <VerticalTimelineElement
    contentStyle={{
      background: 'rgba(22, 27, 34, 0.8)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      border: '1px solid rgba(77, 186, 135, 0.2)',
      borderRadius: '1rem',
      padding: '1.5rem',
      color: '#fff',
      minHeight: '400px',
      height: '400px',
      display: 'flex',
      flexDirection: 'column'
    }}
    contentArrowStyle={{ 
      borderRight: '7px solid rgba(77, 186, 135, 0.2)'
    }}
    date={experience.date}
    iconStyle={{
      background: '#161b22',
      boxShadow: '0 0 0 4px rgba(77, 186, 135, 0.2)',
      border: '2px solid #4dba87',
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full p-2">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[80%] h-[80%] object-contain"
        />
      </div>
    }
  >
    <div className="pb-3 mb-3 border-b border-[#4dba87]/20">
      <h3 className="text-xl font-bold mb-2 text-white">
        {experience.title}
      </h3>
      <p className="text-[#4dba87] text-base font-medium">
        {experience.company_name}
      </p>
    </div>

    <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar">
      <ul className="space-y-4 py-2 pr-2">
        {experience.points.map((point: string, index: number) => (
          <li
            key={`experience-point-${index}`}
            className="text-gray-300 text-[15px] leading-relaxed pl-5 relative text-justify hover:text-white transition-colors duration-200"
          >
            <span className="absolute left-0 top-[0.6em] w-2 h-2 rounded-full bg-[#4dba87]/60 ring-2 ring-[#4dba87]/20" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);

function Experience() {
  return (
    <>
      <div className="text-center mb-12">
        <h3 className="text-[#4dba87] font-medium text-lg sm:text-xl mb-2">
          What I have done so far
        </h3>
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          Work Experience
        </h2>
      </div>

      <div className="mt-16">
        <VerticalTimeline
          animate={true}
          lineColor="rgba(77, 186, 135, 0.2)"
        >
          {experiences.map((experience, index) => (
            <TimelineCard 
              key={index} 
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}

export default SectionWraper(Experience, "work");
