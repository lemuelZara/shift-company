import React, { useState } from 'react';

import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';

import { Container, HeaderContent, Content, ContentOption } from './styles';
import { optionsData } from '../../../data/optionsData';

import CardItem from './CardItem';
import Item from './Item';

const Reasons: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <Container>
      <Content>
        <HeaderContent>
          <h2>Motivos para escolher a Shift</h2>
          <p>
            Clique nos cartões abaixo e veja porque somos sua melhor opção em
            Software para Laboratórios
          </p>
        </HeaderContent>
        <ContentOption>
          <AnimateSharedLayout type="crossfade">
            {optionsData.map((item) => (
              <CardItem key={item.id} {...item} setSelectedId={setSelectedId} />
            ))}

            <AnimatePresence>
              {selectedId && (
                <Item id={selectedId} setSelectedId={setSelectedId} />
              )}
            </AnimatePresence>
          </AnimateSharedLayout>
        </ContentOption>
      </Content>
    </Container>
  );
};

export default Reasons;
