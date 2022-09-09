import { useState } from 'react'
import { IoLanguage } from 'react-icons/io5'
import { IoIosArrowDown } from 'react-icons/io'
import { FaBars } from 'react-icons/fa'
import './styles.css'

import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";


import logo from '../../assets/logo-banner.png'
import brasil from '../../assets/languages/brazil.png'
import english from '../../assets/languages/usa.png'
import spain from '../../assets/languages/spain.png'
import france from '../../assets/languages/france.png'
import { Link } from 'react-router-dom'
import { MdOutlineHearingDisabled } from 'react-icons/md'

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  const { t, i18n } = useTranslation();

  const handleChangeLng = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  function teste(){
    const t1 = document.getElementById("t1").classList.remove("active");
    const t2 = document.getElementById("t2").classList.add("active");
  }

  return (
    <nav className="navigation">
      <div className="grid grid-cols-3 justify-center border-b-2 py-2">
        <div className="flex">
          <div id="optionLanguageDesktop">
            <button onClick={() => handleChangeLng("br")}>
              <img className="w-auto h-10 m-1 ml-10" src={brasil} />
            </button>
            <button onClick={() => handleChangeLng("en")}>
              <img className="w-auto h-10 m-1" src={english} />
            </button>
            <button onClick={() => handleChangeLng("es")}>
              <img className="w-auto h-10 m-1" src={spain} />
            </button>
            <button onClick={() => handleChangeLng("fr")}>
              <img className="w-auto h-10 m-1" src={france} />
            </button>
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
                  <button onClick={() => handleChangeLng("br")}>
                    <img className="w-auto h-10 m-1 ml-10" src={brasil} />
                  </button>
                </li>
                <li>
                  <button>
                    <img className="w-auto h-10 m-1 ml-10" src={france} />
                  </button>
                </li>
                <li>
                  <button>
                    <img className="w-auto h-10 m-1 ml-10" src={spain} />
                  </button>
                </li>
                <li>
                  <button onClick={() => handleChangeLng("en")}>
                    <img className="w-auto h-10 m-1 ml-10" src={english} />
                  </button>
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
        <div className="flex">
          {/* @ts-ignore */} 
          <div vw="true" className="enabled">
            {/* @ts-ignore */} 
            <div id="t1" vw-access-button="true" className="active">
            </div>
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
      <div
        className={
          isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
        }
      >
        <ul className="navigation-menu-ul">
          <li>
            <Link to="/">{t("navbar.inicio")}</Link>
          </li>
          <li>
            <Link to="/historia">{t("navbar.historia")}</Link>
          </li>
          <li>
            <Link to="/agenda">{t("navbar.agenda")}</Link>
          </li>
          <li>
            <Link to="/hoteis">{t("navbar.hoteis")}</Link>
          </li>
          <li>
            <Link to="/turismo">{t("navbar.turismo")}</Link>
          </li>
          <li>
            <Link to="/lazer-esporte">{t("navbar.lazer&esporte")}</Link>
          </li>
          <li>
            <Link to="/restaurantes">{t("navbar.restaurantes")}</Link>
          </li>
          <li>
            <Link to="/album">{t("navbar.album")}</Link>
          </li>
          <li>
            <Link to="/contato">{t("navbar.contato")}</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
