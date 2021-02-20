import React from 'react';

import { Container, Content, LeftFooter, RightFooter, Column } from './styles';
import ShiftLogo from '../../assets/images/shift_logo_footer.png';

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <LeftFooter>
          <img src={ShiftLogo} alt="Shift Logo" srcSet={ShiftLogo} />
          <div>
            <p>Shift · 2019 © Todos os direitos reservados</p>
          </div>
        </LeftFooter>
        <RightFooter>
          <Column>
            <h4>Institucional</h4>
            <div>
              <span>Empresa</span>
              <span>Missão e Valores</span>
              <span>Fale com a Shift</span>
              <span>Carreiras</span>
              <span>Suporte</span>
              <span>Perguntas frequentes</span>
            </div>
          </Column>
          <Column>
            <h4>Soluções</h4>
            <div>
              <span>Gestão Laboratorial</span>
              <span>Rotinas Administrativas</span>
              <span>Interfaceamento</span>
              <span>Gestão do Atendimento</span>
              <span>Todas as Soluções</span>
              <span>Inteligência de Negócios (B.I.)</span>
            </div>
          </Column>
        </RightFooter>
      </Content>
    </Container>
  );
};

export default Footer;
