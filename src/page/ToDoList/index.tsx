import React, { useState, useEffect } from 'react';

import ItemList, { Activity } from '../../components/ItemList';
import HeaderPage from '../../components/HeaderPage';

import api from '../../service/api';

import './style.css';

function ToDoList() {
  
  const [activity, setActivity] = useState([])

  async function getAllActivities() {
    const response = await api.get('to-do-list')

    console.log(response, response.data);

    setActivity(response.data)
  }

  useEffect(() => {
    getAllActivities()
  }, [])

  return (
    <div id="to-do-page">
      <HeaderPage title="Lista de atividades" />

      <main>

        {
          activity.map((activity: Activity) => {
            return (
              <ItemList
                key={activity.id}
                activity = {activity}
              />
            )
          })
        }
        
      </main>

    </div>
  )
}

export default ToDoList;