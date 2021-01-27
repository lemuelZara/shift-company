import { useState } from 'react';

import { wrap } from 'popmotion';

export interface UseMotionSliderData {
  state: [number, number];
  currentIndex: number;
  handleChangeSlide: (newDirection: number) => void;
}

export const useMotionSlider = (data: any): UseMotionSliderData => {
  const [[page, direction], setPage] = useState([0, 0]);
  const currentIndex = wrap(0, data.length, page);

  const handleChangeSlide = (newDirection: number) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  };

  return {
    state: [page, direction],
    currentIndex,
    handleChangeSlide,
  };
};
