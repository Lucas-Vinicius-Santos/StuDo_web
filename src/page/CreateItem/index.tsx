import React from 'react';
import { Link } from 'react-router-dom';

import HeaderPage from '../../components/HeaderPage';

import './style.css'

function CreateItem () {
  return (
    <div id="create-item-page">
      <div id="create-item-page-content" className="container">

        <HeaderPage title="Criar novo item" />
        
        <main>
          <fieldset>
            <div className="content">
              <h1>Parece que você não tem permissão para criar um novo item :/</h1>
              <p>Deseja nos enviar uma sugestão?</p>
              <textarea></textarea>
            </div>

            <div className="input-block">
              <Link to="/" className="inputButton" >Voltar ao inicio</Link>
              <button className="inputButton" >Enviar</button>
            </div>
          </fieldset>
        </main>
 
      </div>
    </div>
    
  )
}

export default CreateItem;