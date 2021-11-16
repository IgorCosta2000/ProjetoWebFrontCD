import React from 'react';
import { BrowserRouter,Route ,Routes } from 'react-router-dom';

import Home from '../View/inicio';
import Task from '../View/tarefa';

const Rout =() =>{
    
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/"element={<Home />}/>
            <Route path="/task"element={<Task />}/>
            <Route path="/task/:id"element={<Task />}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Rout