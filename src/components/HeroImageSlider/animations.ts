const childTransition = {
  type: 'spring',
  stiffness: 200,
  damping: 20,
};

export const MOTION_SLIDER_VARIANTS = {
  containerVariants: {
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  },

  imgVariants: {
    hidden: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },

    visible: {
      x: 0,
      opacity: 1,
    },

    exit: (direction: number) => {
      return {
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  },

  textVariants: {
    hidden: {
      y: -50,
      opacity: 0,
      transition: childTransition,
    },

    visible: {
      y: 0,
      opacity: 1,
      transition: childTransition,
    },

    exit: {
      y: 20,
      opacity: 0,
      transition: childTransition,
    },
  },
};
