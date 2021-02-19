import React from 'react';

import { Container, Content, HeaderContent, Buttons } from './styles';

const Contact: React.FC = () => {
  return (
    <Container>
      <Content>
        <HeaderContent>
          <h3>Vamos conversar?</h3>
          <p>Atendimento comercial</p>
          <p>De segunda a sexta, das 8h às 18h</p>
        </HeaderContent>
        <Buttons>
          <button type="button">Fale com um representante</button>
          <button type="button">(11) 3014-3223</button>
        </Buttons>
      </Content>
    </Container>
  );
};

export default Contact;
