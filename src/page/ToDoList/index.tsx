import React from 'react';

import ItemList from '../../components/ItemList';
import HeaderPage from '../../components/HeaderPage';

import './style.css';

function ToDoList() {
  return (
    <div id="to-do-page">
      <HeaderPage title="Lista de atividades" />

      <main>
        <ItemList
          variant = 'green'
          subject = 'Matemática'
          description = 'Em folha a4'
          day = "15/08/20"
          time = "20:00"
        />
        <ItemList
          variant = 'blue'
          subject = 'Geografia'
          description = 'Em folha a4'
          day = "15/08/20"
          time = "20:00"
        />
        <ItemList
          variant = 'orange'
          subject = 'Matemática'
          description = 'Em folha a4'
          day = "15/08/20"
          time = "20:00"
        />
        <ItemList
          variant = 'red'
          subject = 'Geografia'
          description = 'Em folha a4'
          day = "15/08/20"
          time = "20:00"
        />
      </main>

    </div>
  )
}

export default ToDoList;