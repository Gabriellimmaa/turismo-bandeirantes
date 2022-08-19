import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
import { FcManager } from 'react-icons/fc'
import { FaBars } from 'react-icons/fa'
import './styles.css';
import { convertFirstToUpperCase } from '../../utils'

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Modelo header
      </a>
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