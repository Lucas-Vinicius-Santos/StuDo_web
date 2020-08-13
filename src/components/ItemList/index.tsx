import React from 'react';

import './style.css'

interface Props {
  variant: 'green' | 'blue' | 'orange' | 'red';
  subject: string;
  description: string;
  day: string;
  time: string;
}

const ItemList: React.FC<Props> = (Props) => {

  const { 
    variant, 
    subject, 
    description, 
    day,
    time, 
  } = Props

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