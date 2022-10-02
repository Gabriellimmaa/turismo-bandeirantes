import { useState } from 'react'
import { IoLanguage } from 'react-icons/io5'
import { IoIosArrowDown } from 'react-icons/io'
import { FaBars } from 'react-icons/fa'
import './styles.css'

import { useTranslation } from 'react-i18next'

import { BsZoomIn, BsZoomOut } from 'react-icons/bs'
import { GrPowerReset } from 'react-icons/gr'
import { ImFontSize } from 'react-icons/im'

import logo from '../../assets/logo-banner.png'
import brasil from '../../assets/languages/brazil.png'
import english from '../../assets/languages/usa.png'
import spain from '../../assets/languages/spain.png'
import france from '../../assets/languages/france.png'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [isLangExpanded, setIsLangExpanded] = useState(false)
  const isAccesExpanded = false
  const [isFontExpanded, setIsFontExpanded] = useState(false)
  const { t, i18n } = useTranslation()

  const handleChangeLng = (lng: string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('lng', lng)
  }

  function changefontsize(type: 'increase' | 'decrease' | 'reset') {
    const elements = [
      'p',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'strong',
      'button',
      'a',
      'label',
    ]
    elements.forEach((element) => {
      const p_elements = Array.from(
        document.getElementsByTagName(element) as HTMLCollectionOf<HTMLElement>,
      )
      p_elements.map((p_element) => {
        const font_size = parseInt(window.getComputedStyle(p_element).fontSize)
        if (type === 'increase') {
          p_element.style.fontSize = font_size + 1 + 'px'
        } else if (type === 'decrease') {
          p_element.style.fontSize = font_size - 1 + 'px'
        } else {
          p_element.removeAttribute('style')
        }
      })
    })
  }

  return (
    <nav id="navigation" className="navigation">
      <div className="grid grid-cols-3 justify-center border-b-2 py-2 items-center h-20 md:h-auto">
        <div className="flex justify-start ml-0 md:ml-10">
          <div id="optionLanguageDesktop">
            <button onClick={() => handleChangeLng('br')}>
              <img
                className="w-auto h-10 m-1"
                src={brasil}
                alt="Alterar linguagem para portugues br"
              />
            </button>
            <button onClick={() => handleChangeLng('en')}>
              <img
                className="w-auto h-10 m-1"
                src={english}
                alt="Alterar linguagem para inglês"
              />
            </button>
            <button onClick={() => handleChangeLng('es')}>
              <img
                className="w-auto h-10 m-1"
                src={spain}
                alt="Alterar linguagem para espanhol"
              />
            </button>
            <button onClick={() => handleChangeLng('fr')}>
              <img
                className="w-auto h-10 m-1"
                src={france}
                alt="Alterar linguagem para francês"
              />
            </button>
          </div>

          <div id="optionAccessibilityMobile">
            <ul
              className={
                isAccesExpanded
                  ? 'acces-dropdown-content'
                  : 'acces-dropdown-content'
              }
            >
              <li>
                <div id="optionLanguageMobile">
                  <button
                    onClick={() => {
                      setIsLangExpanded(!isLangExpanded)
                    }}
                  >
                    <div className="items-center">
                      <IoLanguage size={18} />
                      <span> Tradução </span>
                      <IoIosArrowDown className="m-auto" />
                    </div>
                  </button>
                  <div
                    className={
                      isLangExpanded
                        ? 'language-dropdown-content-hidden'
                        : 'language-dropdown-content'
                    }
                  >
                    <ul>
                      <li>
                        <button
                          onClick={() => {
                            handleChangeLng('br')
                            setIsLangExpanded(!isLangExpanded)
                          }}
                        >
                          <img
                            className="w-auto h-10 m-1 ml-10"
                            src={brasil}
                            alt="brasil"
                          />
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            handleChangeLng('fr')
                            setIsLangExpanded(!isLangExpanded)
                          }}
                        >
                          <img
                            className="w-auto h-10 m-1 ml-10"
                            src={france}
                            alt="francês"
                          />
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            handleChangeLng('es')
                            setIsLangExpanded(!isLangExpanded)
                          }}
                        >
                          <img
                            className="w-auto h-10 m-1 ml-10"
                            src={spain}
                            alt="espanhol"
                          />
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            handleChangeLng('en')
                            setIsLangExpanded(!isLangExpanded)
                          }}
                        >
                          <img
                            className="w-auto h-10 m-1 ml-10"
                            src={english}
                            alt="inglês"
                          />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <div id="optionFontMobile">
                  <button
                    onClick={() => {
                      setIsFontExpanded(!isFontExpanded)
                    }}
                  >
                    <ImFontSize size={18} />
                    <IoIosArrowDown className="m-auto" />
                  </button>
                </div>
                <div
                  className={
                    isFontExpanded
                      ? 'font-acces-mobile'
                      : 'font-acces-mobile-hidden'
                  }
                >
                  <ul>
                    <li>
                      <button
                        className="font-zoom-mais-mobile"
                        onClick={() => changefontsize('reset')}
                      >
                        <span className="text-4xl">A</span>
                        <GrPowerReset
                          style={{ marginTop: -14, marginLeft: 42 }}
                          size={14}
                        />
                      </button>
                    </li>
                    <li>
                      <button
                        className="font-zoom-mais-mobile"
                        onClick={() => changefontsize('increase')}
                      >
                        <span className="text-4xl">A</span>
                        <BsZoomIn
                          style={{ marginTop: -14, marginLeft: 42 }}
                          size={14}
                        />
                      </button>
                    </li>
                    <li>
                      <button
                        className="font-zoom-menos-mobile"
                        onClick={() => changefontsize('decrease')}
                      >
                        <span className="text-4xl">A</span>
                        <BsZoomOut
                          style={{ marginTop: -14, marginLeft: 42 }}
                          size={14}
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="/">
            <img className="w-80 h-auto" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="access flex items-center justify-end mr-10">
          <button
            className="font-zoom-mais"
            onClick={() => changefontsize('reset')}
          >
            <span className="text-4xl">A</span>
            <GrPowerReset
              style={{ marginTop: -14, marginLeft: 42 }}
              size={14}
            />
          </button>
          <button
            className="font-zoom-mais"
            onClick={() => changefontsize('increase')}
          >
            <span className="text-4xl">A</span>
            <BsZoomIn style={{ marginTop: -14, marginLeft: 42 }} size={14} />
          </button>
          <button
            className="font-zoom-menos"
            onClick={() => changefontsize('decrease')}
          >
            <span className="text-4xl">A</span>
            <BsZoomOut style={{ marginTop: -14, marginLeft: 42 }} size={14} />
          </button>
          <div className="mx-3">
            {/* @ts-ignore */}
            <div vw="true" className="enabled">
              {/* @ts-ignore */}
              <div id="t1" vw-access-button="true" className="active"></div>
              {/* @ts-ignore */}
              <div id="t2" vw-plugin-wrapper="true">
                {/* @ts-ignore */}
                <div className="vw-plugin-top-wrapper"></div>
              </div>
            </div>
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
      </div>
      <div
        className={
          isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
        }
      >
        <ul
          className="navigation-menu-ul"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded)
          }}
        >
          <li>
            <Link to="/">{t('navbar.inicio')}</Link>
          </li>
          <li>
            <Link to="/historia">{t('navbar.historia')}</Link>
          </li>
          <li>
            <Link to="/map">{t('navbar.mapa')}</Link>
          </li>
          <li>
            <Link to="/agenda">{t('navbar.agenda')}</Link>
          </li>
          <li>
            <Link to="/hoteis">{t('navbar.hoteis')}</Link>
          </li>
          <li>
            <Link to="/turismo">{t('navbar.turismo')}</Link>
          </li>
          <li>
            <Link to="/restaurantes">{t('navbar.restaurantes')}</Link>
          </li>
          <li>
            <Link to="/album">{t('navbar.album')}</Link>
          </li>
          <li>
            <Link to="/contato">{t('navbar.contato')}</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
