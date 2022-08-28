import { useState } from 'react'
import { IoLanguage } from 'react-icons/io5'
import { IoIosArrowDown } from 'react-icons/io'
import { FaBars } from 'react-icons/fa'
import './styles.css'

import logo from '../../assets/logo-banner.png'
import brasil from '../../assets/languages/brazil.png'
import english from '../../assets/languages/usa.png'
import spain from '../../assets/languages/spain.png'
import france from '../../assets/languages/france.png'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <div className="grid grid-cols-3 justify-center border-b-2 py-2">
        <div className="flex">
          <div id="optionLanguageDesktop">
            <a>
              <img className="w-auto h-10 m-1 ml-10" src={brasil} />
            </a>
            <a>
              <img className="w-auto h-10 m-1" src={english} />
            </a>
            <a>
              <img className="w-auto h-10 m-1" src={spain} />
            </a>
            <a>
              <img className="w-auto h-10 m-1" src={france} />
            </a>
          </div>
          <div id="optionLanguageMobile">
            <div className="items-center">
              <IoLanguage size={18} />
              <span> Tradução </span>
              <IoIosArrowDown className="m-auto" />
            </div>
            <span></span>
            <div className="language-dropdown-content">
              <ul>
                <li>
                  <a href="#">
                    <img className="w-auto h-10 m-1 ml-10" src={brasil} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img className="w-auto h-10 m-1 ml-10" src={france} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img className="w-auto h-10 m-1 ml-10" src={spain} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img className="w-auto h-10 m-1 ml-10" src={english} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="/">
            <img className="w-80 h-auto" src={logo} />
          </Link>
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
          isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
        }
      >
        <ul className="navigation-menu-ul">
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/historia">História</Link>
          </li>
          <li>
            <Link to="/agenda">Agenda</Link>
          </li>
          <li>
            <Link to="/hoteis">Hotéis</Link>
          </li>
          <li>
            <Link to="/turismo">Turismo</Link>
          </li>
          <li>
            <Link to="/lazer-esporte">Lazer & Esporte</Link>
          </li>
          <li>
            <Link to="/restaurantes">Restaurantes</Link>
          </li>
          <li>
            <Link to="/album">Álbum</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
