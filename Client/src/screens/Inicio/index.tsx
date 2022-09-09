import { Carousel } from '../../components/Carousel'
import { GiCommercialAirplane, GiSoccerBall } from 'react-icons/gi'
import { FaHotel } from 'react-icons/fa'
import { MdFastfood } from 'react-icons/md'
import { BiPhotoAlbum } from 'react-icons/bi'
import { GrSchedule } from 'react-icons/gr'
import { CardHome } from '../../components/CardHome'
import Navbar from '../../components/Navbar'
import CardAgenda from '../../components/CardAgenda'
import { optionAgenda } from '../Agenda/optionData'
import { TurismoHome } from './TurismoHome'

import './styles.css'
import { useTranslation } from 'react-i18next'

export default function Inicio() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="w-full h-[65%]">
        <Carousel />
      </div>
      <section className="acessoRapido">
        <div className="w-full px-10">
          <div className="w-full mt-10 ">
            <h1 className="flex justify-center items-center text-center my-16 text-4xl font-extrabold uppercase">
              {t("paginas.inicio.header")}
            </h1>

            <div className="flex flex-wrap sm:justify-center md:justify-center xl:justify-center 2xl:justify-start gap-10 max-w-7xl mx-auto my-0">
              <CardHome
                key="lazer-esporte"
                link="/lazer-esporte"
                icon={<GiSoccerBall size={28} />}
                titulo={t("paginas.inicio.acesso-rapido.lazer-esporte.titulo")}
                corpo={t("paginas.inicio.acesso-rapido.lazer-esporte.descricao")}
              />
              <CardHome
                key="hoteis"
                link="/hoteis"
                icon={<FaHotel size={28} />}
                titulo={t("paginas.inicio.acesso-rapido.hoteis.titulo")}
                corpo={t("paginas.inicio.acesso-rapido.hoteis.descricao")}
              />
              <CardHome
                key="turismo"
                link="/turismo"
                icon={<GiCommercialAirplane size={28} />}
                titulo={t("paginas.inicio.acesso-rapido.turismo.titulo")}
                corpo={t("paginas.inicio.acesso-rapido.turismo.descricao")}
              />
              <CardHome
                key="restaurantes"
                link="/restaurantes"
                icon={<MdFastfood size={28} />}
                titulo={t("paginas.inicio.acesso-rapido.restaurantes.titulo")}
                corpo={t("paginas.inicio.acesso-rapido.restaurantes.descricao")}
              />
              <CardHome
                key="album"
                link="/album"
                icon={<BiPhotoAlbum size={28} />}
                titulo={t("paginas.inicio.acesso-rapido.album.titulo")}
                corpo={t("paginas.inicio.acesso-rapido.album.descricao")}
              />
              <CardHome
                key="agenda"
                link="/agenda"
                icon={<GrSchedule size={28} />}
                titulo={t("paginas.inicio.acesso-rapido.agenda.titulo")}
                corpo={t("paginas.inicio.acesso-rapido.agenda.descricao")}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="turismo w-full">
        <TurismoHome />
      </section>
      <section className="agenda">
        <div className="w-full mt-20 px-10">
          <h1 className="flex justify-center text-center my-16 text-4xl font-extrabold uppercase">
            Calendário de eventos
          </h1>
          <Navbar objectList={optionAgenda} />
          <div className="grid grid-cols-3 gap-5 justify-items-center mt-6">
            <CardAgenda
              description="Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
          muito ar puro e belos momentos natureza Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
          muito ar puro e belos momentos natureza Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
          muito ar puro e belos momentos natureza Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
          muito ar puro e belos momentos natureza"
              title="Lazer e esporte"
              data="30/01/2022"
              address="Av. Azárias Viêira de Rezende, 301 - Bandeirantes"
              path="https://www.bandeirantes.pr.gov.br/public/admin/globalarq/uploads/images/turismo/__thumbs/Santuário%20São%20Miguel%20Arcanjo%20EstatuaResultado.jpg/Santuário%20São%20Miguel%20Arcanjo%20EstatuaResultado__512x342.jpg"
            />
            <CardAgenda
              description="Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
          muito ar puro e belos momentos natureza"
              title="Lazer e esporte"
              data="30/02/2022"
              address="Av. Azárias Viêira de Rezende, 301 - Bandeirantes"
              path="https://www.bandeirantes.pr.gov.br/public/admin/globalarq/uploads/images/turismo/__thumbs/Santuário%20São%20Miguel%20Arcanjo%20EstatuaResultado.jpg/Santuário%20São%20Miguel%20Arcanjo%20EstatuaResultado__512x342.jpg"
            />
            <CardAgenda
              description="Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
          muito ar puro e belos momentos natureza"
              title="Lazer e esporte"
              data="30/03/2022"
              address="Av. Azárias Viêira de Rezende, 301 - Bandeirantes"
              path="https://www.bandeirantes.pr.gov.br/public/admin/globalarq/uploads/images/turismo/__thumbs/Santuário%20São%20Miguel%20Arcanjo%20EstatuaResultado.jpg/Santuário%20São%20Miguel%20Arcanjo%20EstatuaResultado__512x342.jpg"
            />
            <CardAgenda
              description="Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
          muito ar puro e belos momentos natureza"
              title="Lazer e esporte"
              data="30/04/2022"
              address="Av. Azárias Viêira de Rezende, 301 - Bandeirantes"
              path="https://www.bandeirantes.pr.gov.br/public/admin/globalarq/uploads/images/turismo/__thumbs/Santuário%20São%20Miguel%20Arcanjo%20EstatuaResultado.jpg/Santuário%20São%20Miguel%20Arcanjo%20EstatuaResultado__512x342.jpg"
            />
            <CardAgenda
              description="Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
          muito ar puro e belos momentos natureza"
              title="Lazer e esporte"
              data="30/05/2022"
              address="Av. Azárias Viêira de Rezende, 301 - Bandeirantes"
              path="https://www.bandeirantes.pr.gov.br/public/admin/globalarq/uploads/images/turismo/__thumbs/Santuário%20São%20Miguel%20Arcanjo%20EstatuaResultado.jpg/Santuário%20São%20Miguel%20Arcanjo%20EstatuaResultado__512x342.jpg"
            />
          </div>
        </div>
      </section>
      <div className="parallax flex items-center justify-center bg-fixed w-full bg-[url('https://scontent-gru1-2.xx.fbcdn.net/v/t39.30808-6/265276800_2981423038775488_615807068815183275_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=973b4a&_nc_ohc=l-OqmBDR9A4AX-QRmsw&_nc_ht=scontent-gru1-2.xx&oh=00_AT_K50tepTcMyW7RroWn2tgZ-41ohCRz-dAOQwTzU1TO5Q&oe=6311BF81')] bg-cover bg-no-repeat bg-center"></div>
    </>
  )
}
