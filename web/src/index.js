import React from 'react';
import ReactDOM from 'react-dom';
import Home from './View/inicio';
import Task from './View/tarefa';

import Rout from './routes/index';


ReactDOM.render(
  <React.StrictMode>
    <Rout/>
  </React.StrictMode>,
  document.getElementById('root')
);

