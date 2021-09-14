import React from 'react';
import * as Styled from './styles';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Filter from '../../components/filter';
function Home() {
  return (
 <Styled.Container>
      <Header />
        <Styled.ContainerFilter>
          <Filter title="Todos"/>
          <Filter title="Hoje"/>
          <Filter title="Semana"/>
          <Filter title="Mês"/>
        </Styled.ContainerFilter>
      <Footer />
    </Styled.Container>
  )
}

export default Home;
