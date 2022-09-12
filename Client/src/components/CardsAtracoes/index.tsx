import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './style.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Loading } from '../Loading'

// install Virtual module
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
  // Create array with 500 slides
  return (
    <div className="turismoHome w-full">
      <div className="flex justify-center  items-center  text-center mb-5">
        <div>
          <h1 className=" font-extrabold uppercase">O QUE FAZER?</h1>
        </div>
        <div className="absolute right-80 mt-3">
          <Link
            to="/turismo"
            className="text-lg rounded-3xl border-2 border-grayHover  hover:text-gray-800 py-2 px-9 font-extrabold hover:bg-grayHover transition-all duration-500"
          >
            Ver Todas
          </Link>
        </div>
      </div>
      <Swiper
        style={{ padding: '20px 0' }}
        slidesPerView={3}
        navigation={true}
        virtual
        // pagination={{
        //   clickable: true,
        // }}
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
                <p className="text-white text-center text-2xl">{atracao.nome}</p>
                <Link
                  to={`/turismo/${atracao.id}`}
                  className="bg-transparent rounded-2xl border px-5 py-1 text-white border-white hover:bg-green-brasao hover:text-white hover:border-transparent animate-ease-in-out transition duration-200"
                >
                  Saiba Mais
                </Link>
              </div>
              <img className="rounded-xl bg-cover bg-center" src={atracao.logo} alt={atracao.nome} />
            </div>
          </SwiperSlide>
        ))}
        {/* Esse segundo é só para teste */}
        {/* {turismo.map((atracao) => (
          <SwiperSlide key={atracao.id}>
            <CardTurismoHome
              title={atracao.nome}
              path={atracao.logo}
              id={atracao.id}
            />
          </SwiperSlide>
        ))} */}
      </Swiper>
    </div>
  )
}
