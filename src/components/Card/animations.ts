export const CARD_ANIMATION = {
  unMounted: {
    x: 30,
    opacity: 0,
  },
  mounted: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      type: 'spring',
      damping: 10,
      stiffness: 100,
      delay: i * 0.0625,
    },
  }),
};
