import React, {useState} from 'react';
import * as Styled from './styles';


/*   IMAGENS*/ 
import Imagem from '../../Imgs/filter2.png';
import futebol from '../../Imgs/futebol.jpg';
import viagem from '../../Imgs/viagem.png';
import lanche from '../../Imgs/lanche.jpg'
import prova from '../../Imgs/prova.jpg'
import cinema from '../../Imgs/cinema.png'
import academia from '../../Imgs/academia.jpg'
import trabalho from '../../Imgs/trabalho.png'
import compra from '../../Imgs/compra.jpg'

/* COMPONENTES*/
import Header from '../../components/header';
import Footer from '../../components/footer';
import Filter from '../../components/filter';
import TaskCard from '../../components/TaskCard';


function Home() {
  
  const [filterActived,functionFilter ]= useState()
  
  return (
 <Styled.Container>
      <Header />
        <Styled.ContainerFilter>
          
          <button type='button' onClick={()=>functionFilter('todos')}>
            <Filter title="Todos"img={Imagem} actived={filterActived == 'todos'}/>
          </button>

          <button type='button' onClick={()=>functionFilter('hoje')}>
            <Filter title="Hoje"img={Imagem} actived={filterActived == 'hoje'}/>
          </button>

          <button type='button' onClick={()=>functionFilter('semana')}>
            <Filter title="Semana"img={Imagem}actived={filterActived == 'semana'}/>
          </button>
        
          <button type='button' onClick={()=>functionFilter('mes')}>
            <Filter title="Mês"img={Imagem}actived={filterActived == 'mes'}/>
          </button>
          
          </Styled.ContainerFilter>
          <Styled.ContainerCard>
            <TaskCard img={futebol} title="Futebol"/>
            <TaskCard img={viagem} title="Viagem"/>
            <TaskCard img={prova} title="Prova"/>
            <TaskCard img={academia} title="academia"/>
            <TaskCard img={lanche} title="Lanche"/>
            <TaskCard img={compra} title="Compra"/>
            <TaskCard img={trabalho} title="Trabalho"/>
            <TaskCard img={cinema} title="Cinema"/>
          </Styled.ContainerCard>
      <Footer />
    </Styled.Container>
  )
}

export default Home;
