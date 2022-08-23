import { useState } from 'react'
import { IoLanguage } from 'react-icons/io5'
import { IoIosArrowDown } from 'react-icons/io'
import { FaBars } from 'react-icons/fa'
import './styles.css'

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <div className="grid grid-cols-3 justify-center border-b-2 py-2">
        <div className="flex">
          <div id="optionLanguageDesktop">
            <a>
              <img
                className="w-auto h-10 m-1 ml-10"
                src="src\assets\languages\brazil.png"
              />
            </a>
            <a>
              <img
                className="w-auto h-10 m-1"
                src="src\assets\languages\france.png"
              />
            </a>
            <a>
              <img
                className="w-auto h-10 m-1"
                src="src\assets\languages\spain.png"
              />
            </a>
            <a>
              <img
                className="w-auto h-10 m-1"
                src="src\assets\languages\usa.png"
              />
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
                    <img
                      className="w-auto h-10 m-1 ml-10"
                      src="src\assets\languages\brazil.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="w-auto h-10 m-1 ml-10"
                      src="src\assets\languages\france.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="w-auto h-10 m-1 ml-10"
                      src="src\assets\languages\spain.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="w-auto h-10 m-1 ml-10"
                      src="src\assets\languages\usa.png"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img className="w-80 h-auto" src="src\assets\logo-banner.png" />
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
            <a href="/">Início</a>
          </li>
          <li>
            <a href="/historia">História</a>
          </li>
          <li>
            <a href="/agenda">Agenda</a>
          </li>
          <li>
            <a href="/hoteis">Hotéis</a>
          </li>
          <li>
            <a href="/turismo">Turismo</a>
          </li>
          <li>
            <a href="/lazer-esporte">Lazer & Esporte</a>
          </li>
          <li>
            <a href="/restaurantes">Restaurantes</a>
          </li>
          <li>
            <a href="/album">Álbum</a>
          </li>
          <li>
            <a href="/contato">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
