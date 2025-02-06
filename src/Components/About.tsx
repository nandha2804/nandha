import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../Constants";
import { SectionWraper } from "../Utils";
import {
  swing,
  subTitleChild,
  subTitleFadeIn,
  fadeIn,
  child,
  titleFadeIn,
  titleChild,
  desc,
} from "../Utils/Motion";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    perspective={2000}
    glareEnable={true}
    glareMaxOpacity={0.45}
    glareBorderRadius={"20px"}
    glarePosition={"all"}
    scale={1.1}
    transitionSpeed={1500}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      initial={{ opacity: 0, transform: "translateX(-20vw)" }}
      whileInView={{ opacity: 1, transform: "translateX(0px)" }}
      transition={{ duration: index * 1.5, type: "spring" }}
      className="w-full p-[1px] rounded-[20px] shadow-card"
      style={{ border: "#4dba87 2px solid" }}
    >
      <div className="bg-tertiary rounded-[20px] ">
        <motion.div
          variants={swing}
          animate="visible"
          className="py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </motion.div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  //   const subText = [
  //     "<",
  //     " ",
  //     "I",
  //     "n",
  //     "t",
  //     "r",
  //     "o",
  //     "d",
  //     "u",
  //     "c",
  //     "t",
  //     "i",
  //     "o",
  //     "n",
  //     " ",
  //     "/>",
  //   ];
  const title = ["O", "v", "e", "r", "v", "i", "e", "w", "."];
  const p = "< Introduction />";
  return (
    <>
      <Zoom top cascade duration={1500}>
        <span className="   sm:text-[18px] text-[14px] secondary-color uppercase">
          {p}
        </span>
      </Zoom>
      <Zoom top cascade duration={1500}>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </Zoom>

      <motion.div
        variants={desc}
        initial="hidden"
        whileInView="visible"
        className="mt-4 text-justify secondary-color  text-[17px] max-w-7xl leading-[30px]"
      >
        I'm a skilled software developer with experience in Python, Django,
        HTML5, CSS3, TypeScript, JavaScript, React, MySQL, MongoDB, AWS and Docker.
        And also Experienced in developing Front-end web Applications and
        RESTfull API's. I'm a quick learner and collaborate closely with clients
        to create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-10 justify-evenly">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWraper(About, "about");
