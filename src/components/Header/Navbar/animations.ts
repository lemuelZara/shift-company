export const NAV_ANIMATION = {
  unMounted: {
    y: -10,
    opacity: 0,
  },
  mounted: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.3,
      duration: 1,
      ease: 'easeInOut',
    },
  },
};
