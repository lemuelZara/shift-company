export const TITLE_ANIMATION = {
  mounted: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.02,
    },
  },
};

export const LETTER_ANIMATION = {
  unMounted: {
    opacity: 0,
    y: -30,
  },
  mounted: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

export const INFO_ANIMATION = {
  unMounted: {
    opacity: 0,
    y: 200,
  },
  mounted: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 2,
      ease: [0.6, 0.01, -0.05, 0.9],
      type: 'spring',
    },
  },
};

export const IMAGE_ANIMATION = {
  unMounted: {
    opacity: 0,
    y: 30,
    width: '100%',
  },
  mounted: (heightPage: number): any => ({
    opacity: 1,
    y: 0,
    width: '100%',
    height: heightPage > 768 ? '40rem' : '20rem',
    transition: {
      duration: 1.2,
      ease: 'easeInOut',
    },
  }),
  hover: {
    scale: 1.1,
  },
};
