import React, {useState, useEffect} from 'react';
import * as Styled from './styles';
import api from '../../services/api';

import { Link } from 'react-router-dom';

/*   IMAGENS*/ 
import Imagem from '../../Imgs/filter2.png';


/* COMPONENTES*/
import Header from '../../components/header';
import Footer from '../../components/footer';
import Filter from '../../components/filter';
import TaskCard from '../../components/TaskCard';






function Home() {

  //variavel e função responsavel por atualizar o valor do filtro
  const [filterActive, functionFilter ]= useState('all');
  
  //a setTasks vai ser a função responsavel por armazenar na variavel tasks as tarefas do banco de dados
  const [tasks,setTasks ]= useState([]);

  //função responsavel por fazer as requisiçoes para o backend
  async function loadtasks(){
await api.get(`/task//filter/${filterActive}/11:11:11:11:11:11`)
.then(response =>{
  setTasks(response.data)
})
}

useEffect(()=>{
loadtasks();
}, [filterActive])

  return (
 <Styled.Container>
      <Header />
        <Styled.ContainerFilter>
          
          <button type='button' onClick={()=>functionFilter('all')}>
            <Filter title="Todos"img={Imagem} actived={filterActive == 'all'}/>
          </button>

          <button type='button' onClick={()=>functionFilter('today')}>
            <Filter title="Hoje"img={Imagem} actived={filterActive == 'today'}/>
          </button>

          <button type='button' onClick={()=>functionFilter('week')}>
            <Filter title="Semana"img={Imagem}actived={filterActive == 'week'}/>
          </button>
        
          <button type='button' onClick={()=>functionFilter('month')}>
            <Filter title="Mês"img={Imagem}actived={filterActive == 'month'}/>
          </button>
          
          <button type='button' onClick={()=>functionFilter('year')}>
            <Filter title="ano"img={Imagem}actived={filterActive == 'year'}/>
          </button>
          
          </Styled.ContainerFilter>
          <Styled.ContainerCard>
             
            {
            tasks.map(
              t=> (
              <Link to={`/task/${t._id}`}>
              <TaskCard type={t.type} title={t.title} when={t.when}/>
              </Link>

            ))
            }
          </Styled.ContainerCard>
      <Footer />
    </Styled.Container>
  )
}

export default Home;
