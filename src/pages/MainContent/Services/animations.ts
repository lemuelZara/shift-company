export const HEADER_CONTENT_ANIMATION = {
  unMounted: {
    x: -50,
    opacity: 0,
  },
  mounted: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      type: 'spring',
      damping: 10,
      stiffness: 100,
    },
  },
};
