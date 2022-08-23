import { Carousel } from '../../components/Carousel'
import { GiCommercialAirplane, GiSoccerBall } from 'react-icons/gi'
import { FaHotel } from 'react-icons/fa'
import { MdFastfood } from 'react-icons/md'
import { BiPhotoAlbum } from 'react-icons/bi'
import { GrSchedule } from 'react-icons/gr'
import { CardHome } from '../../components/CardHome'

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
            <CardHome
              key="lazer-esporte"
              link="/lazer-esporte"
              icon={<GiSoccerBall size={28} />}
              titulo="Lazer e esporte"
              corpo="Nossa cidade é o seu destino perfeito Cultura, esporte,
              lazer, muito ar puro e belos momentos natureza"
            />
            <CardHome
              key="hoteis"
              link="/hoteis"
              icon={<FaHotel size={28} />}
              titulo="Hotéis"
              corpo="Encontre Hotéis, Pousadas e Fazendas para se hospedar"
            />
            <CardHome
              key="turismo"
              link="/turismo"
              icon={<GiCommercialAirplane size={28} />}
              titulo="Turismo"
              corpo="Conheça nossos principais pontos turisticos"
            />
            <CardHome
              key="restaurantes"
              link="/restaurantes"
              icon={<MdFastfood size={28} />}
              titulo="Restaurantes"
              corpo="Quando a fome bater, nossa comida vai te surpreender! Pratos
              e sabores inesquecíveis"
            />
            <CardHome
              key="album"
              link="/album"
              icon={<BiPhotoAlbum size={28} />}
              titulo="Álbum"
              corpo="Ainda tem dúvidas se dever conhecer a cidade? Então acesse
              nossas fotos e se encante com a beleza da cidade"
            />
            <CardHome
              key="agenda"
              link="/agenda"
              icon={<GrSchedule size={28} />}
              titulo="Agenda"
              corpo="Conheça nosso calendário de eventos para não perder nenhuma
              atração."
            />
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
