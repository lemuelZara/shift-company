import React, { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { IconBaseProps } from 'react-icons/lib';
import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';
import { CARD_ANIMATION } from './animations';

interface ICardProps {
  title: string;
  description: string;
  icon: React.ComponentType<IconBaseProps>;
  custom: number;
}

const Card: React.FC<ICardProps> = ({
  title,
  description,
  icon: Icon,
  custom,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.9,
  });

  useEffect(() => {
    if (inView) {
      controls.start('mounted');
    }
  }, [controls, inView]);

  return (
    <Container
      ref={ref}
      animate={controls}
      custom={custom}
      initial="unMounted"
      variants={CARD_ANIMATION}
    >
      <Icon size={30} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button type="button">
        <FiSearch size={20} />
        Saiba mais
      </button>
    </Container>
  );
};

export default Card;
