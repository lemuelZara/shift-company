import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import {
  Container,
  HeroWrapper,
  HeroSlide,
  HeroSlider,
  HeroImage,
  Image,
  HeroContent,
  Arrow,
  SliderButtons,
  PrevArrow,
  NextArrow,
} from './styles';

import { MOTION_SLIDER_VARIANTS } from './animations';
import { useMotionSlider } from '../../hooks/useMotionSlider';

interface IProps {
  slides: {
    id: number;
    title: string;
    subTitle: string;
    label: string;
    image: string;
    imageSrcSet: string;
    alt: string;
  }[];
}

const { containerVariants, imgVariants, textVariants } = MOTION_SLIDER_VARIANTS;

const HeroImageSlider: React.FC<IProps> = ({ slides }) => {
  const { state, currentIndex, handleChangeSlide } = useMotionSlider(slides);

  const { title, subTitle, image, imageSrcSet, alt, label } = slides[
    currentIndex
  ];
  const [page, direction] = state;

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Container>
      <HeroWrapper>
        <HeroSlide>
          <AnimatePresence initial={false} custom={direction} exitBeforeEnter>
            <HeroSlider
              key={page}
              custom={direction}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <HeroImage>
                <Image
                  src={image}
                  srcSet={imageSrcSet}
                  alt={alt}
                  variants={imgVariants}
                  transition={{
                    x: {
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    },
                  }}
                />
              </HeroImage>
              <HeroContent>
                <motion.h1 variants={textVariants}>{title}</motion.h1>
                <motion.p variants={textVariants}>{subTitle}</motion.p>
                <motion.div variants={textVariants}>
                  <button type="button">
                    {label}
                    <Arrow />
                  </button>
                </motion.div>
              </HeroContent>
            </HeroSlider>
          </AnimatePresence>
        </HeroSlide>

        <SliderButtons>
          <PrevArrow onClick={() => handleChangeSlide(-1)} />
          <NextArrow onClick={() => handleChangeSlide(1)} />
        </SliderButtons>
      </HeroWrapper>
    </Container>
  );
};

export default HeroImageSlider;
