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
          <img className='w-auto h-10 m-1 ml-10' src="src\assets\languages\brazil.png" />
          <img className='w-auto h-10 m-1' src="src\assets\languages\france.png" />
          <img className='w-auto h-10 m-1' src="src\assets\languages\spain.png" />
          <img className='w-auto h-10 m-1' src="src\assets\languages\usa.png" />
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
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/sobre">Sobre</a>
          </li>
          <li>
            <a href="/contato">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}