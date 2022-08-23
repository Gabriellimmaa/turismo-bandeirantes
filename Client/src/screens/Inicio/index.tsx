import { Carousel } from '../../components/Carousel'
import { GiCommercialAirplane, GiSoccerBall } from 'react-icons/gi'
import { FaHotel } from 'react-icons/fa'
import { MdFastfood } from 'react-icons/md'
import { BiPhotoAlbum } from 'react-icons/bi'
import { GrSchedule } from 'react-icons/gr'

export default function Inicio() {
  return (
    <>
      <div className="w-full h-[65%]">
        <Carousel />
      </div>
      <div className="w-full px-10">
        <div className="w-full mt-10 ">
          <h1 className="flex justify-center my-16 text-4xl font-extrabold uppercase">
            Acesso rápido
          </h1>

          <div className="flex flex-wrap sm:justify-center md:justify-center xl:justify-center 2xl:justify-start gap-10 max-w-7xl mx-auto my-0">
            <a href="/lazer-esporte">
              <div className="w-[23.999rem] min-h-[14.621rem] rounded overflow-hidden shadow-lg">
                <h2 className="flex py-2 justify-center">
                  <GiSoccerBall size={28} />
                </h2>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Lazer e esporte</div>
                  <p className="text-gray-700 text-base">
                    Nossa cidade é o seu destino perfeito Cultura, esporte,
                    lazer, muito ar puro e belos momentos natureza
                  </p>
                </div>
              </div>
            </a>
            <a href="/hoteis">
              <div className="w-[23.999rem] min-h-[14.621rem] rounded overflow-hidden shadow-lg">
                <h2 className="flex py-2 justify-center">
                  <FaHotel size={28} />
                </h2>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Hotéis</div>
                  <p className="text-gray-700 text-base">
                    Encontre Hotéis, Pousadas e Fazendas para se hospedar
                  </p>
                </div>
              </div>
            </a>
            <a href="/turismo">
              <div className="min-h-[14.621rem] w-[23.999rem] rounded overflow-hidden shadow-lg">
                <h2 className="flex py-2 justify-center">
                  <GiCommercialAirplane size={28} />
                </h2>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Turismo </div>
                  <p className="text-gray-700 text-base">
                    Conheça nossos principais pontos turisticos
                  </p>
                </div>
              </div>
            </a>
            <a href="/restaurantes">
              <div className="min-h-[14.621rem] w-[23.999rem] rounded overflow-hidden shadow-lg">
                <h2 className="flex py-2 justify-center">
                  <MdFastfood size={28} />
                </h2>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Restaurantes </div>
                  <p className="text-gray-700 text-base">
                    Quando a fome bater, nossa comida vai te surpreender! Pratos
                    e sabores inesquecíveis
                  </p>
                </div>
              </div>
            </a>
            <a href="/album">
              <div className="min-h-[14.621rem] w-[23.999rem] rounded overflow-hidden shadow-lg">
                <h2 className="flex py-2 justify-center">
                  <BiPhotoAlbum size={28} />
                </h2>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Álbum </div>
                  <p className="text-gray-700 text-base">
                    Ainda tem dúvidas se dever conhecer a cidade? Então acesse
                    nossas fotos e se encante com a beleza da cidade
                  </p>
                </div>
              </div>
            </a>
            <a href="/agenda">
              <div className="min-h-[14.621rem] w-[23.999rem] rounded overflow-hidden shadow-lg">
                <h2 className="flex py-2 justify-center">
                  <GrSchedule size={28} />
                </h2>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Agenda </div>
                  <p className="text-gray-700 text-base">
                    Conheça nosso calendário de eventos para não perder nenhuma
                    atração.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full mt-20">
        <h1 className="flex justify-center my-16 text-4xl font-extrabold uppercase">
          Calendário de eventos
        </h1>
      </div>
    </>
  )
}
