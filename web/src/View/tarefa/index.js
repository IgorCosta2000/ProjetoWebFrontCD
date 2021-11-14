import React, {useState, useEffect} from 'react';
import * as Styled from './styles';
import api from '../../services/api';

/*   IMAGENS*/ 
import Imagem from '../../Imgs/filter2.png';


/* COMPONENTES*/
import Header from '../../components/header';
import Footer from '../../components/footer';
import Filter from '../../components/filter';
import TaskCard from '../../components/TaskCard';
import iconUtils from '../../utils/icons';






function Task() {

    const [type,setType] = useState();

  return (
 <Styled.Container>
      <Header />
        
      <Styled.Form>
       <Styled.Icons>
        {
            iconUtils.map((icon,index)=>(
                index > 0 &&
                <button type= "button" onClick={()=>setType(index)}>
             <img src={icon}alt="Tarefa"className={type && type != index && 'off'}/>
                </button>            
            ))
        }
     
       </Styled.Icons>

      <Styled.Input>
          <input type="text" placeholder="Título"></input>
      </Styled.Input>

      <Styled.TextArea>
          <input type="textarea" placeholder="Descrição"></input>
      </Styled.TextArea>

      <Styled.Input>
          <input type="date" ></input>
      </Styled.Input>

      <Styled.Input>
          <input type="time" ></input>
      </Styled.Input>
       
      <Styled.Option>
          <div>
              <input type="checkbox"></input>
              <span>CONCLUIDO</span>
          </div>
          <button type="button">EXCLUIR</button>
      </Styled.Option>

      <Styled.Save>
          <button type="button">SALVAR</button>
      </Styled.Save>
      </Styled.Form>

      
      <Footer />
    </Styled.Container>
  )
}

export default Task;