import { motion } from "framer-motion";
import { styles } from "../style";
import { staggerContainer } from "./Motion";

const SectionsWraper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        initial={{ opacity: 0, transform: "translateY(20vw)" }}
        whileInView={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ duration:  .5, type: "spring" }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionsWraper;
