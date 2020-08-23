import React from 'react';

import './style.css'

export interface Activity {
  variant: 'green' | 'blue' | 'orange' | 'red';
  id: number;
  subject: string;
  description: string;
  day: string;
  time: string;
}

interface ActivityProps {
  activity: Activity;
}

const ItemList: React.FC<ActivityProps> = ({ activity }) => {

  const { 
    variant, 
    subject, 
    description, 
    day,
    time, 
  } = activity

  return (
    <article id="item-list" className="container">

        <header className={`header-item ${variant}`} >
          <h1>{subject}</h1>
        </header>

        <footer className="body-item">

          <div className="input-block">
           <label>{description}</label>
          </div>

          <footer>
            <h3>Entregar até as {time} do dia {day} </h3>
          </footer>

        </footer>

    </article>
  );
}

export default ItemList;