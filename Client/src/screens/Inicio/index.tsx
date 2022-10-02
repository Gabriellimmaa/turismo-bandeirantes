import { IoIosSend, IoMdPhotos } from 'react-icons/io'
import { IoAirplaneSharp } from 'react-icons/io5'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { FaMapMarked, FaHotel } from 'react-icons/fa'
import { Carousel } from '../../components/Carousel'
import { MdFastfood } from 'react-icons/md'
import { CardHome } from '../../components/CardHome'
import { CardsAtracoes } from '../../components/CardsAtracoes'

import imgMobile from '../../assets/img/inicio/mobile.png'
import img1 from '../../assets/img/inicio/badgeAndroid.png'
import img2 from '../../assets/img/inicio/badgeApple.png'

import './styles.css'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Inicio() {
  const { t } = useTranslation()
  return (
    <>
      <div className="w-full h-[65%] pt-20 md:pt-0">
        <Carousel />
      </div>
      <section className="inicio-section">
        <div className="acessoRapido inicio">
          <div className="w-full">
            <div className="w-full mt-10 mb-14">
              <h1 className="flex justify-center items-center text-center my-16 text-4xl font-extrabold uppercase">
                {t('paginas.inicio.header')}
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 content-center">
                <CardHome
                  key="mapa"
                  link="/map"
                  icon={<FaMapMarked size={28} />}
                  titulo={t('paginas.inicio.acesso-rapido.mapa.titulo')}
                  corpo={t('paginas.inicio.acesso-rapido.mapa.descricao')}
                />
                <CardHome
                  key="hoteis"
                  link="/hoteis"
                  icon={<FaHotel size={28} />}
                  titulo={t('paginas.inicio.acesso-rapido.hoteis.titulo')}
                  corpo={t('paginas.inicio.acesso-rapido.hoteis.descricao')}
                />
                <CardHome
                  key="turismo"
                  link="/turismo"
                  icon={<IoAirplaneSharp size={28} />}
                  titulo={t('paginas.inicio.acesso-rapido.turismo.titulo')}
                  corpo={t('paginas.inicio.acesso-rapido.turismo.descricao')}
                />
                <CardHome
                  key="restaurantes"
                  link="/restaurantes"
                  icon={<MdFastfood size={28} />}
                  titulo={t('paginas.inicio.acesso-rapido.restaurantes.titulo')}
                  corpo={t(
                    'paginas.inicio.acesso-rapido.restaurantes.descricao',
                  )}
                />
                <CardHome
                  key="album"
                  link="/album"
                  icon={<IoMdPhotos size={28} />}
                  titulo={t('paginas.inicio.acesso-rapido.album.titulo')}
                  corpo={t('paginas.inicio.acesso-rapido.album.descricao')}
                />
                <CardHome
                  key="agenda"
                  link="/agenda"
                  icon={<BsFillCalendarDateFill size={28} />}
                  titulo={t('paginas.inicio.acesso-rapido.agenda.titulo')}
                  corpo={t('paginas.inicio.acesso-rapido.agenda.descricao')}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="download grid grid-cols-1 md:grid-cols-2 items-center h-auto">
        <div className="cartao grid text-center gap-5">
          <h1 className="flex mx-5 my-3 justify-center items-center text-center text-4xl font-extrabold uppercase text-green-900">
            {t('paginas.inicio.app')}
          </h1>
          <h5 className="mb-5">{t('paginas.inicio.appDesc')}</h5>
          <div className="grid grid-cols-1">
            <a
              className="badges"
              href="https://expo.dev/artifacts/b30ddaaf-d9db-476c-a826-8b51beb34846"
            >
              <img alt="Download Android" className="md:max-w-xs" src={img1} />
            </a>
            <a
              className="badges mb-3"
              onClick={() =>
                alert(
                  'IOS ainda não disponível pois leva um tempo até ser aprovado na App Store',
                )
              }
            >
              <img alt="Download IOS" className="md:max-w-xs" src={img2} />
            </a>
          </div>
        </div>
        <div className="block">
          <img
            src={imgMobile}
            className="mx-auto h-auto w-full max-h-full max-w-screen-sm"
            alt="imagem do mobile"
          />
        </div>
      </div>
      <div className="parallax">
        <div className="py-2 px-4 grid items-center">
          <span>
            <h1 className="text-3xl my-0 font-extrabold uppercase text-white whitespace-nowrap">
              {t('paginas.inicio.parallax.titulo')}
            </h1>
          </span>
          <span className="flex gap-2 md:gap-4">
            <input
              type="text"
              className="w-1/5 md:w-1/2 h-10 rounded-lg pl-2"
              placeholder={t('paginas.inicio.parallax.placeholderNome')}
            />
            <input
              type="text"
              className="w-1/2 md:w-full h-10 rounded-lg pl-2"
              placeholder={t('paginas.inicio.parallax.placeholderSugestao')}
            />
            <button className="w-full">
              <IoIosSend /> {t('paginas.inicio.parallax.botao')}{' '}
            </button>
          </span>
        </div>
      </div>
      <section className="inicio inicio-section">
        <div className="turismo w-full">
          <div className="w-full px-10">
            <div className="w-full mt-10 flex justify-center">
              <div className="flex flex-nowrap flex-col lg:flex-row w-11/12 items-center justify-center">
                <h1 className="flex whitespace-nowrap text-center md:pl-0 lg:pl-40 flex-1 justify-center text-4xl font-extrabold uppercase">
                  {t('paginas.inicio.cards')}
                </h1>
                <Link
                  to="/turismo"
                  className="text-lg rounded-3xl border-2 border-grayHover  hover:text-gray-800 py-2 px-9 font-extrabold hover:bg-grayHover transition-all duration-500"
                >
                  {t('paginas.inicio.botao')}
                </Link>
              </div>
            </div>
          </div>
          <CardsAtracoes />
        </div>
      </section>
    </>
  )
}
