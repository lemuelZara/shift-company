import React from 'react';

import {
  FiArrowDown,
  FiCpu,
  FiUsers,
  FiTrendingUp,
  FiDollarSign,
} from 'react-icons/fi';
import { FaTools, FaSitemap } from 'react-icons/fa';

import {
  Container,
  Content,
  HeaderContent,
  SectionContent,
  Card,
} from './styles';

const Services: React.FC = () => {
  return (
    <Container>
      <Content>
        <HeaderContent>
          <h2>O que seu laboratório precisa hoje?</h2>
          <p>
            Sempre haverá uma solução da Shift para te ajudar em sua rotina
            laboratorial
          </p>
          <FiArrowDown size={50} />
        </HeaderContent>
        <SectionContent>
          <Card>
            <FiCpu size={30} />
            <h3>Eficiência Operacional</h3>
            <p>
              Tenha um sistema de gestão completo e integrado e garanta ao
              laboratório as melhores práticas de mercado, inteligência de
              processos, segurança e rastreabilidade.
            </p>
          </Card>
          <Card>
            <FiUsers size={30} />
            <h3>Gestão de Atendimento</h3>
            <p>
              Maior agilidade e gestão do tempo de espera do paciente para
              realização do cadastro e tempo de espera para chamada e realização
              da coleta.
            </p>
          </Card>
          <Card>
            <FiTrendingUp size={30} />
            <h3>Inteligência de Negócios</h3>
            <p>
              Transforme dados em indicadores, gráficos e relatórios em tempo
              real, suportando a tomada de decisão.
            </p>
          </Card>
          <Card>
            <FiDollarSign size={30} />
            <h3>Gestão Financeira</h3>
            <p>
              Gerenciamento completo da rotina administrativa e estoque do
              laboratório, com gestão de múltiplas empresas no mesmo sistema.
            </p>
          </Card>
          <Card>
            <FaTools size={30} />
            <h3>Interfaceamento</h3>
            <p>
              Rapidez e segurança na análise de resultados, com a automação de
              equipamentos integrada ao Controle da Qualidade Analítica.
            </p>
          </Card>
          <Card>
            <FaSitemap size={30} />
            <h3>Integração</h3>
            <p>
              Troca de informações seguras entre sistemas de laboratórios de
              apoio, hospitais, operadoras, entre outros.
            </p>
          </Card>
        </SectionContent>
      </Content>
    </Container>
  );
};

export default Services;
