import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
import { IoLanguage } from 'react-icons/io5'
import { FaBars } from 'react-icons/fa'
import './styles.css';
import { convertFirstToUpperCase } from '../../utils'

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <div className='grid grid-cols-3 justify-center'>
        <div className='flex'>
        <div className=" menu-language-dropdown">
            <span>Language</span>
            <div className="language-dropdown-content">
            <ul>
              <li><a href="#"><img className='w-auto h-10 m-1 ml-10' src="src\assets\languages\brazil.png" /></a></li>
              <li><a href="#"><img className='w-auto h-10 m-1 ml-10' src="src\assets\languages\france.png" /></a></li>
              <li><a href="#"><img className='w-auto h-10 m-1 ml-10' src="src\assets\languages\spain.png" /></a></li>
              <li><a href="#"><img className='w-auto h-10 m-1 ml-10' src="src\assets\languages\usa.png" /></a></li>
            </ul>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <img className='w-auto h-20' src="src\assets\logo-banner.png" />
        </div>
      </div>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        <FaBars />
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul className='navigation-menu-ul'>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/sobre">Sobre</a>
          </li>
          <li>
            <a href="/contato">Contato</a>
          </li>
          <li>
            <a href="/noticias">Notícias</a>
          </li>
          <li>
            <a href="/turismo">Turismo</a>
          </li>
          <li>
            <a href="/historia">História</a>
          </li>
          <li>
            <a href="/lazer-esporte">Lazer & Esporte</a>
          </li>
          <li>
            <a href="/hoteis">Hotéis</a>
          </li>
          <li>
            <a href="/restaurantes">Restaurantes</a>
          </li>
          <li>
            <a href="/album">Álbum</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}