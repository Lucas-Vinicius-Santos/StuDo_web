import React from 'react';
import { Link } from 'react-router-dom'

import backIcon from '../../assets/image/icons/back.svg'

import './style.css'

interface HeaderProps {
  title: string;
}


const HeaderPage: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div id="header-page" className="container">
      <header id="header-page">
        <div className="top-bar-container">

          <Link to="/">
            <img src={backIcon} alt="Voltar"/>
          </Link>

          <h1>StuDo</h1>

        </div>

        <div className="header-content">
          <h1>{title}</h1>
        </div>
        
      </header>
    </div>
  )
}

export default HeaderPage;