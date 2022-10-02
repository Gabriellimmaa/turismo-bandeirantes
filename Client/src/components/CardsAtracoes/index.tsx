import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './style.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Loading } from '../Loading'
import { useTranslation } from 'react-i18next'

SwiperCore.use([Virtual, Navigation, Pagination])

interface TurismoHomeProps {
  id: number
  nome: string
  descricao: string
  logo: string
  telefone: string
  latitude: string
  longitude: string
}

export function CardsAtracoes() {
  const { t } = useTranslation()
  const [turismo, setTurismo] = useState<TurismoHomeProps[]>([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/atracoes').then((response) => {
      setTurismo(response.data.atracoes)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <Loading />
  }
  return (
    <div className="turismoHome w-full">
      <Swiper
        style={{ padding: '50px 20px' }}
        slidesPerView={3}
        navigation={true}
        virtual
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {turismo.map((atracao) => (
          <SwiperSlide key={atracao.id}>
            <div className="max-w-xs cardTurismoHome rounded-xl">
              <div className="max-w-xs px-4 flex flex-col rounded-xl justify-around items-center absolute w-full h-full titleSobrebor">
                <p className="text-white text-center text-2xl">
                  {atracao.nome}
                </p>
                <Link
                  to={`/turismo/detalhe/${atracao.id}`}
                  className="bg-transparent rounded-2xl border px-5 py-1 text-white border-white hover:bg-green-brasao hover:text-white hover:border-transparent animate-ease-in-out transition duration-200"
                >
                  {t('paginas.inicio.saibaMais')}
                </Link>
              </div>
              <img
                className="rounded-xl bg-cover bg-center"
                src={atracao.logo}
                alt={atracao.nome}
              />
            </div>
          </SwiperSlide>
        ))}{' '}
      </Swiper>
    </div>
  )
}
