import React from 'react';

import purpleHeartIcon from '../../assets/image/icons/purple-heart.svg'

import HeaderPage from '../../components/HeaderPage';

import './style.css'

function CreateItem () {
  return (
    <div id="create-item-page">

        <HeaderPage title="Criar novo item" />
        
        <main>
          <fieldset>

            <div className="content">
              <legend>Parece que você não tem permissão para criar um novo item :/</legend>
              <p>Deseja nos enviar uma sugestão?</p>
              <textarea></textarea>
            </div>
            
          </fieldset>
          
          <div className="input-block">
              <p>
                Obrigado pela contribuição 
                <span> <img src={purpleHeartIcon} alt="coração"/> </span> 
              </p>
              <button className="inputButton" >Enviar sugestão</button>
            </div>

        </main>
 
    </div>
    
  )
}

export default CreateItem;