import React from 'react';

import landingImg from '../../assets/image/landingImg.png'

import './style.css'
 
function Landing() {
  return (
    <div id="landing-page">
 
      <div id="landing-page-content" className="container">
        
        <div id="content">
          <h1>StuDo</h1>
          <p>Plataforma para você organizar seus estudos</p>
        </div>

        <img src={landingImg} alt="" className="heroImg" />

        <div className="input-block">

          <a href="#" className="inputButton" id="ToDoList">
            <p className="inputButtonText">Ver Lista</p>
          </a>

          <a href="#" className="inputButton" id="CreateItem">
            <p className="inputButtonText">Novo Item</p>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Landing;