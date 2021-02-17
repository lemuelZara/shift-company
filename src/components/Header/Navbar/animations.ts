export const NAV_ANIMATION = {
  unMounted: {
    y: -30,
    opacity: 0,
  },
  mounted: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.3,
      ease: 'easeInOut',
    },
  },
};
