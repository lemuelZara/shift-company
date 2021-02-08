import React, { Dispatch, SetStateAction } from 'react';

import { Card, TitleContainer } from './styles';

interface IProps {
  id: string;
  title: string;
  description: string;
  setSelectedId: Dispatch<SetStateAction<string | null>>;
}

const CardItem: React.FC<IProps> = ({ id, title, setSelectedId }) => {
  return (
    <Card
      layoutId={`card-content-${id}`}
      onClick={() => setSelectedId(id)}
      whileHover={{
        y: -2,
        transition: {
          type: 'spring',
          mass: 1.3,
        },
      }}
      whileTap={{
        y: 2,
        transition: {
          type: 'spring',
          mass: 1.3,
        },
      }}
    >
      <TitleContainer layoutId={`title-container-${id}`}>
        <h2>{title}</h2>
      </TitleContainer>
    </Card>
  );
};

export default CardItem;
