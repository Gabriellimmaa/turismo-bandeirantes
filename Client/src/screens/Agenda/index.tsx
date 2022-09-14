import Card from '../../components/Card'
import Toolbar from '../../components/Toolbar'
import { optionAgenda } from './optionData'
import './styles.css'

export function Agenda() {
  return (
    <section id="agenda">
      <div className="title-style-1">
        <h1>Agenda</h1>
        <h2>Aqui pode ver todas as datas que vou comer sua mãe</h2>
      </div>
      <Toolbar objectList={optionAgenda} />
      <div className="grid grid-cols-3 gap-5 justify-items-center mt-6">
        <Card
          id={1}
          type="agenda"
          description="Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
          muito ar puro e belos momentos natureza Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
          muito ar puro e belos momentos natureza Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
          muito ar puro e belos momentos natureza Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
          muito ar puro e belos momentos natureza"
          title="Lazer e esporte"
          date="30/01/2022"
          locale="Av. Azárias Viêira de Rezende, 301 - Bandeirantes"
          img="https://www.bandeirantes.pr.gov.br/public/admin/globalarq/uploads/images/turismo/__thumbs/Santuário%20São%20Miguel%20Arcanjo%20EstatuaResultado.jpg/Santuário%20São%20Miguel%20Arcanjo%20EstatuaResultado__512x342.jpg"
        />
        <Card
          id={1}
          type="agenda"
          description="Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
          muito ar puro e belos momentos natureza Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
          muito ar puro e belos momentos natureza Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
          muito ar puro e belos momentos natureza Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
          muito ar puro e belos momentos natureza"
          title="Lazer e esporte"
          date="30/01/2022"
          locale="Av. Azárias Viêira de Rezende, 301 - Bandeirantes"
          img="https://www.bandeirantes.pr.gov.br/public/admin/globalarq/uploads/images/turismo/__thumbs/Santuário%20São%20Miguel%20Arcanjo%20EstatuaResultado.jpg/Santuário%20São%20Miguel%20Arcanjo%20EstatuaResultado__512x342.jpg"
        />
        <Card
          id={1}
          type="agenda"
          description="Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
          muito ar puro e belos momentos natureza Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
          muito ar puro e belos momentos natureza Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
          muito ar puro e belos momentos natureza Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
          muito ar puro e belos momentos natureza"
          title="Lazer e esporte"
          date="30/01/2022"
          locale="Av. Azárias Viêira de Rezende, 301 - Bandeirantes"
          img="https://www.bandeirantes.pr.gov.br/public/admin/globalarq/uploads/images/turismo/__thumbs/Santuário%20São%20Miguel%20Arcanjo%20EstatuaResultado.jpg/Santuário%20São%20Miguel%20Arcanjo%20EstatuaResultado__512x342.jpg"
        />
        <Card
          id={1}
          type="agenda"
          description="Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
          muito ar puro e belos momentos natureza Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
          muito ar puro e belos momentos natureza Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
          muito ar puro e belos momentos natureza Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
          muito ar puro e belos momentos natureza"
          title="Lazer e esporte"
          date="30/01/2022"
          locale="Av. Azárias Viêira de Rezende, 301 - Bandeirantes"
          img="https://www.bandeirantes.pr.gov.br/public/admin/globalarq/uploads/images/turismo/__thumbs/Santuário%20São%20Miguel%20Arcanjo%20EstatuaResultado.jpg/Santuário%20São%20Miguel%20Arcanjo%20EstatuaResultado__512x342.jpg"
        />
        <Card
          id={1}
          type="agenda"
          description="Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
          muito ar puro e belos momentos natureza Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
          muito ar puro e belos momentos natureza Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
          muito ar puro e belos momentos natureza Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
          muito ar puro e belos momentos natureza"
          title="Lazer e esporte"
          date="30/01/2022"
          locale="Av. Azárias Viêira de Rezende, 301 - Bandeirantes"
          img="https://www.bandeirantes.pr.gov.br/public/admin/globalarq/uploads/images/turismo/__thumbs/Santuário%20São%20Miguel%20Arcanjo%20EstatuaResultado.jpg/Santuário%20São%20Miguel%20Arcanjo%20EstatuaResultado__512x342.jpg"
        />
      </div>
    </section>
  )
}
