import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import './styles.css'

import { Autoplay, FreeMode, Pagination } from 'swiper'
import { useTranslation } from 'react-i18next'

import img1 from '../../assets/img/historia/Band1.jpg'
import img2 from '../../assets/img/historia/Band2.jpg'
import img3 from '../../assets/img/historia/Band3.jpg'
import img4 from '../../assets/img/historia/Band4.jpg'
import img5 from '../../assets/img/historia/Band5.jpg'
import img6 from '../../assets/img/historia/Band6.jpg'
import bandeira from '../../assets/img/historia/Bandeirantes.png'
import brasao from '../../assets/img/historia/brasao.png'

export default function Historia() {
  const { t } = useTranslation()

  return (
    <section className="historia">
      <h1>{t('paginas.historia.header')}</h1>
      <div className="texto">
        <h2>{t('paginas.historia.topico1.titulo')}</h2>

        <p>{t('paginas.historia.topico1.paragrafo1')}</p>
        <p>{t('paginas.historia.topico1.paragrafo2')}</p>
        <p>{t('paginas.historia.topico1.paragrafo3')}</p>

        <h2>{t('paginas.historia.topico2.titulo')}</h2>

        <p>{t('paginas.historia.topico2.paragrafo1')}</p>
        <p>{t('paginas.historia.topico2.paragrafo2')}</p>

        <div className="dados">
          <p>
            <h2>{t('paginas.historia.topico3.titulo')}</h2>
            <br />
            <b>{t('paginas.historia.topico3.inauguracao.titulo')}:</b>{' '}
            {t('paginas.historia.topico3.inauguracao.descricao')}
            <br />
            <b>{t('paginas.historia.topico3.gentilico.titulo')}:</b>{' '}
            {t('paginas.historia.topico3.gentilico.descricao')}
            <br />
            <b>{t('paginas.historia.topico3.populacao.titulo')}:</b>{' '}
            {t('paginas.historia.topico3.populacao.descricao')}
            <br />
            <b>{t('paginas.historia.topico3.territorio.titulo')}:</b>{' '}
            {t('paginas.historia.topico3.territorio.descricao')}
            <br />
            <b>{t('paginas.historia.topico3.densidade.titulo')}:</b>{' '}
            {t('paginas.historia.topico3.densidade.descricao')}
            <br />
            <b>{t('paginas.historia.topico3.bioma.titulo')}:</b>{' '}
            {t('paginas.historia.topico3.bioma.descricao')}
            <br />
            <b>{t('paginas.historia.topico3.altitude.titulo')}:</b>{' '}
            {t('paginas.historia.topico3.altitude.descricao')}
            <br />
            <b>{t('paginas.historia.topico3.clima.titulo')}:</b>{' '}
            {t('paginas.historia.topico3.clima.descricao')}
            <br />
            <b>{t('paginas.historia.topico3.temperatura.titulo')}:</b>{' '}
            {t('paginas.historia.topico3.temperatura.descricao')}
            <br />
            <b>{t('paginas.historia.topico3.renda.titulo')}:</b>{' '}
            {t('paginas.historia.topico3.renda.descricao')}
            <br />
            <b>{t('paginas.historia.topico3.idh.titulo')}:</b>{' '}
            {t('paginas.historia.topico3.idh.descricao')}
            <br />
            <b>{t('paginas.historia.topico3.pib.titulo')}:</b>{' '}
            {t('paginas.historia.topico3.pib.descricao')}
            <br />
          </p>
          <div className="imagens">
            <div className="container">
              <img className="bandeira" src={bandeira} alt="bandeira" />
              <div className="overlay1">
                <div className="text">Bandeira do Município</div>
              </div>
            </div>
            <div className="container">
              <img className="brasao" src={brasao} alt="brasão" />
              <div className="overlay2">
                <div className="text">Brasão do Município</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Swiper
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        freeMode={true}
        initialSlide={1}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src={img1} alt="Imagem slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Imagem slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Imagem slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="Imagem slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="Imagem slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="Imagem slide" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
