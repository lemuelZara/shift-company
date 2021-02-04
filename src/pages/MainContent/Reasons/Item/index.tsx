import React, { Dispatch, SetStateAction } from 'react';

import { FiX } from 'react-icons/fi';

import { IconBaseProps } from 'react-icons/lib';
import {
  Overlay,
  Card,
  TitleContainer,
  Backdrop,
  Container,
  Content,
} from './styles';
import { optionsData } from '../../../../data/optionsData';

interface IProps {
  id: string;
  setSelectedId: Dispatch<SetStateAction<string | null>>;
}

const Item: React.FC<IProps> = ({ id, setSelectedId }) => {
  const option = optionsData.find((item) => item.id === id);

  const Icon = option?.icon as React.ComponentType<IconBaseProps>;

  return (
    <>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.4 } }}
        exit={{ opacity: 0, transition: { duration: 0.8 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: 'auto' }}
        onClick={() => setSelectedId(null)}
      />
      <Container>
        <Card layoutId={`card-content-${id}`}>
          <Content>
            {option?.icon && <Icon size={40} />}
            <TitleContainer layoutId={`title-container-${id}`}>
              <h2>{option?.description}</h2>
            </TitleContainer>
            <button type="button" onClick={() => setSelectedId(null)}>
              <FiX size={15} color="#fff" />
            </button>
          </Content>
        </Card>
      </Container>
      <Backdrop initial={{ opacity: 0 }} />
    </>
  );
};

export default Item;
