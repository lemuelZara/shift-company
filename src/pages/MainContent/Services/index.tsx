import React, { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

import { Container, Content, HeaderContent, SectionContent } from './styles';
import { HEADER_CONTENT_ANIMATION } from './animations';
import { servicesData } from '../../../data/servicesData';

import Card from '../../../components/Card';

const Services: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('mounted');
    }
  }, [controls, inView]);

  return (
    <Container>
      <Content>
        <HeaderContent
          ref={ref}
          animate={controls}
          initial="unMounted"
          variants={HEADER_CONTENT_ANIMATION}
        >
          <h2>O que seu laboratório precisa hoje?</h2>
          <p>
            Sempre haverá uma solução da Shift para te ajudar em sua rotina
            laboratorial
          </p>
          <FiArrowDown size={50} />
        </HeaderContent>
        <SectionContent>
          {servicesData.map((item, index) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
              custom={index}
            />
          ))}
        </SectionContent>
      </Content>
    </Container>
  );
};

export default Services;
