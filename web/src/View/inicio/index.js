import React, {useState, useEffect} from 'react';
import * as Styled from './styles';
import api from '../../services/api';

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

  //variavel e função responsavel por atualizar o valor do filtro
  const [filterActived, functionFilter ]= useState('all');
  
  //a setTasks vai ser a função responsavel por armazenar na variavel tasks as tarefas do banco de dados
  const [tasks,setTasks ]= useState([]);

  //função responsavel por fazer as requisiçoes para o backend
  async function loadtasks(){
await api.get(`/task//filter/${filterActived}/11:11:11:11:11:11`)
.then(response =>{
  setTasks(response.data)
})
}

useEffect(()=>{
loadtasks();
},[filterActived])

  return (
 <Styled.Container>
      <Header />
        <Styled.ContainerFilter>
          
          <button type='button' onClick={()=>functionFilter('all')}>
            <Filter title="Todos"img={Imagem} actived={filterActived == 'all'}/>
          </button>

          <button type='button' onClick={()=>functionFilter('today')}>
            <Filter title="Hoje"img={Imagem} actived={filterActived == 'today'}/>
          </button>

          <button type='button' onClick={()=>functionFilter('week')}>
            <Filter title="Semana"img={Imagem}actived={filterActived == 'week'}/>
          </button>
        
          <button type='button' onClick={()=>functionFilter('month')}>
            <Filter title="Mês"img={Imagem}actived={filterActived == 'month'}/>
          </button>
          
          <button type='button' onClick={()=>functionFilter('year')}>
            <Filter title="ano"img={Imagem}actived={filterActived == 'year'}/>
          </button>
          
          </Styled.ContainerFilter>
          <Styled.ContainerCard>
            {tasks.map(t=>(
              <TaskCard />
            ))}
          </Styled.ContainerCard>
      <Footer />
    </Styled.Container>
  )
}

export default Home;
/*
 <TaskCard img={futebol} title="Futebol"/>
            <TaskCard img={viagem} title="Viagem"/>
            <TaskCard img={prova} title="Prova"/>
            <TaskCard img={academia} title="academia"/>
            <TaskCard img={lanche} title="Lanche"/>
            <TaskCard img={compra} title="Compra"/>
            <TaskCard img={trabalho} title="Trabalho"/>
            <TaskCard img={cinema} title="Cinema"/>



*/