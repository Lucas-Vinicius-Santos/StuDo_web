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
          variant = 'red'
          subject = 'Matemática'
          description = 'Descrição da atividade'
          day = "15/09/20"
          time = "20:00"
        />
        <ItemList
          variant = 'orange'
          subject = 'Geografia'
          description = 'Descrição da atividade'
          day = "16/09/20"
          time = "20:00"
        />
        <ItemList
          variant = 'green'
          subject = 'Matemática'
          description = 'Descrição da atividade'
          day = "18/09/20"
          time = "20:00"
        />
        <ItemList
          variant = 'blue'
          subject = 'Geografia'
          description = 'Descrição da atividade'
          day = "20/09/20"
          time = "20:00"
        />
      </main>

    </div>
  )
}

export default ToDoList;