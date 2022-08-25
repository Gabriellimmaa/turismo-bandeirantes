import CardAgenda from '../../components/CardAgenda'
import Navbar from '../../components/Navbar'
import { optionAgenda } from './optionData'
import './styles.css'

export function Agenda() {
  return (
    <section id="agenda">
      <h1 className="text-center w-full text-5xl">AGENDA</h1>
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
    </section>
  )
}
