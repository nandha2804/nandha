export const fadeIn = {
  hidden: {
    opacity: 0,
    scale: 0,
    // x: 200,
  },
  visible: (i = 1) => ({
    opacity: 1,
    // x: 0,
    scale: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.2 * i },
  }),
};

export const child = {
  visible: {
    opacity: 1,
    // x: 0,
    // y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 5,

      //   duration:5,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    scale: 0,
    // x: 100,
    // y: 20,
    transition: {
      type: "spring",
      delay: 2,
      damping: 12,
      stiffness: 100,
    },
  },
};
export const subTitleFadeIn = {
  hidden: {
    opacity: 0,

    x: -0,
    y: -50,
  },
  visible: (i = 1) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: { staggerChildren: 0.13, delayChildren: 0.2 * i },
  }),
};

export const subTitleChild = {
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 110,
    },
  },
  hidden: {
    opacity: 0,
    x: -20,
    y: -50,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};
export const titleFadeIn = {
  hidden: {
    opacity: 0,
    // x: 100,
  },
  visible: (i = 1) => ({
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.13, delayChildren: 0.2 * i },
  }),
};

export const titleChild = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 110,
    },
  },
  hidden: {
    opacity: 0,
    // x: 100,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export const swing = {
  visible: {
    y: [0, -13, 0],
    scale: [1, 1.05, 1],
    transition: {
      type: "spring",
      duration: 4,
      stiffness: 100,
      damping: 12,
      repeat: Infinity,
    },
  },
};

export const desc = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 2,
    },
  },
};

export const staggerContainer = (staggerChildren: number, delayChildren?: number) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 1,
      },
    },
  };
};
