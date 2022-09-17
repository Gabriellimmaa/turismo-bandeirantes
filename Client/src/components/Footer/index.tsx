import { FaEnvelope, FaFacebook, FaPhone, FaYoutube } from 'react-icons/fa'
import './styles.css'

import logo from '../../assets/logoTurismo.png'
import logoBanner from '../../assets/logo-banner.png'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="border-t-2">
      <div className="footer">
        <div className="redes">
          <div className="logo">
            <img
              className="w-auto mt-6 mb-6 object-contain"
              src={logo}
              alt="Logo Bandeirantes Turismo"
            />
          </div>
          <div className="redesIcon">
            <a href="google.com">
              <FaFacebook size={28} />
            </a>
            <a href="">
              <FaYoutube size={28} />
            </a>
          </div>
        </div>
        <div className="containerHero">
          <div className="containerInfos">
            <div className="column titleHidden">
              <h3>{t('footer.paginas.titulo')}</h3>
              <div className="pages">
                <Link to="/historia">{t('footer.paginas.sobre')}</Link>
                <Link to="/hoteis">{t('footer.paginas.onde-dormir')}</Link>
                <Link to="/turismo">{t('footer.paginas.oque-fazer')}</Link>
                <Link to="/map">{t('footer.paginas.mapa')}</Link>
              </div>
            </div>
            <div className="column titleHidden">
              <h3>Notícias</h3>
              <div className="notices">
                <a href="">
                  <div className="notice">
                    <img className="w-auto h-20" src={logoBanner} alt="Logo" />
                    <div className="notice-text">
                      Brasão
                      <p>20/15/2022</p>
                    </div>
                  </div>
                </a>
                <a href="">
                  <div className="notice">
                    <img
                      className="w-auto h-20"
                      src="src\assets\logo-banner.png"
                    />
                    <div className="notice-text">
                      Brasão
                      <p>20/15/2022</p>
                    </div>
                  </div>
                </a>
                <a href="">
                  <div className="notice">
                    <img
                      className="w-auto h-20"
                      src="src\assets\logo-banner.png"
                    />
                    <div className="notice-text">
                      Brasão
                      <p>20/15/2022</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="column">
              <h3>{t('footer.contato')}</h3>
              <div className="contacts">
                <strong>Rua Frei Raphael Proner, 1457</strong>
                <strong>
                  <FaPhone color="#727272" />
                  (43) 3542-4525
                </strong>
                <strong>
                  <FaEnvelope color="#727272" />
                  comunicacao@bandeirantes.pr.gov.br
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>{t('footer.copy')}</p>
        <img
          className="w-auto max-h-20 bg-contain"
          src={logoBanner}
          alt="Logo Bandeirantes"
        />
        <p>{t('footer.creditos')}</p>
      </div>
    </footer>
  )
}
