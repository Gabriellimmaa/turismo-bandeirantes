import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import './styles.css'

// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper'
import { useTranslation } from 'react-i18next'

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
              <img
                className="bandeira"
                src="\src\assets\img\historia\Bandeirantes.png"
              />
              <div className="overlay1">
                <div className="text">Bandeira do Município</div>
              </div>
            </div>
            <div className="container">
              <img
                className="brasao"
                src="\src\assets\img\historia\brasao.png"
              />
              <div className="overlay2">
                <div className="text">Brasão do Município</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Swiper
        slidesPerView={3}
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
          <img src="src\assets\img\historia\Band1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\historia\Band2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\historia\Band3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\historia\Band4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\historia\Band5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\historia\Band6.jpg" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
