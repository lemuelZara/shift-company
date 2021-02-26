import React from 'react';

import { Container, Content, Header, GridOptions, Card } from './styles';
import { CARD_ANIMATION } from './animations';
import ShiftGif from '../../../assets/images/shift.gif';

const Numbers: React.FC = () => {
  return (
    <Container>
      <Content>
        <Header>
          <h2>Shift em números</h2>
          <p>Confira alguns dados sobre a nossa empresa</p>
        </Header>
        <GridOptions>
          <Card variants={CARD_ANIMATION} whileHover="hover" whileTap="hover">
            <span>20%</span>
            <p>Crescimento acima de 20% nos últimos 6 anos consecutivos</p>
          </Card>
          <Card>
            <span>22 estados</span>
            <p>Presente em 22 estados do Brasil</p>
          </Card>
          <Card variants={CARD_ANIMATION} whileHover="hover" whileTap="hover">
            <span>5 países</span>
            <p>
              E também em 5 países Brasil, Argentina, Uruguai, Bolívia e
              Paraguai
            </p>
          </Card>
          <Card>
            <span>18%</span>
            <p>Soluções Shift processam 18% do volume de exames Brasil</p>
          </Card>
          <Card gridArea="cardCenter">
            <img src={ShiftGif} alt="Shift Gif" srcSet={ShiftGif} />
          </Card>
          <Card>
            <span>280 milhões</span>
            <p>Mais de 280 milhões de exames processados por ano</p>
          </Card>
          <Card variants={CARD_ANIMATION} whileHover="hover" whileTap="hover">
            <span>40 milhões</span>
            <p>
              Mais de 40 milhões de atendimentos por meio das soluções Shift
            </p>
          </Card>
          <Card>
            <span>20 mil</span>
            <p>Mais de 20 mil usuários ativos</p>
          </Card>
          <Card variants={CARD_ANIMATION} whileHover="hover" whileTap="hover">
            <span>80%</span>
            <p>Cerca de 80% possuem pelo menos uma acreditação de qualidade</p>
          </Card>
        </GridOptions>
      </Content>
    </Container>
  );
};

export default Numbers;
