import React, {useState} from 'react';
import * as Styled from './styles';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Filter from '../../components/filter';
import Imagem from '../../Imgs/filter2.png';


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
      <Footer />
    </Styled.Container>
  )
}

export default Home;
