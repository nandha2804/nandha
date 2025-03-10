import React, { useState } from "react";
import { styles } from "../style";
import { Link } from "react-router-dom";
import { footerLinks } from "../Constants";
import { menu, close } from "../Assets";
import { motion } from "framer-motion";

const Footer = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const R = "< N";
  const name = "anda />";
  return (
    <motion.nav
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 2, type: "spring" }}
      className={`${styles.paddingX} w-full flex flex-col items-center py-5 pb-0  top-0 z-20 bg-primary`}
    >
      <div className="w-full flex flex-col justify-between mx-auto max-w-7xl items-center">
        <div>
          <Link
            to="#"
            className="flex item-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <p className={`${styles.navText}`} style={{ color: "#4dba87" }}>
              {R}
              <span className="text-white text-[1rem] xxs:text[4rem]">
                {name}
              </span>
            </p>
          </Link>
        </div>
        <ul className="sm:flex flex gap-2 list-none ">
          {footerLinks.map((link, index) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-[white]" : "text-secondary"
              } font-medium  p-1 text-[1rem]  hover:text-[white]`}
              onClick={() => setActive(link.title)}
            >
              <a className="font" href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-secondary text-[.7rem] xxs:text[1rem]">
          &copy;2025 Developer nandi | All Rights Reserved
        </p>
      </div>
    </motion.nav>
  );
};

export default Footer;
