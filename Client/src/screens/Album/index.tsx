import './styles.css'
import { useTranslation } from 'react-i18next'

import img1 from '../../assets/img/album/album01.jpeg'
import img2 from '../../assets/img/album/album02.jpeg'
import img3 from '../../assets/img/album/album03.jpeg'
import img4 from '../../assets/img/album/album04.jpeg'
import img5 from '../../assets/img/album/album05.jpeg'
import img6 from '../../assets/img/album/album06.jpg'
import img7 from '../../assets/img/album/album07.jpg'

export function Album() {
  const { t } = useTranslation()
  return (
    <section id="album">
      <div className="title-style-1">
        <h1>{t('paginas.album.titulo')}</h1>
        <h2>{t('paginas.album.subtitulo')}</h2>
        <div className="album-display">
          <div className="album-content">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
