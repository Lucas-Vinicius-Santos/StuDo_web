import React from 'react';
import { Link } from 'react-router-dom'

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

          <Link to="/to-do-list" className="inputButton" id="ToDoList">
            <p className="inputButtonText">Ver Lista</p>
          </Link>

          <Link to="/criar-novo-item" className="inputButton" id="CreateItem">
            <p className="inputButtonText">Novo Item</p>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Landing;