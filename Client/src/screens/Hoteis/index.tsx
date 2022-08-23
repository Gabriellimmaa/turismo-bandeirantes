import CardHotel from '../../components/CardHotel'
import './styles.css'

export function Hoteis() {
  return (
    <>
      <div className="containerHotel">
        <h1 className="uppercase">Onde ficar?</h1>
        <h2 className="uppercase">
          Encontre hotéis, pousadas e muito outros lugares para se hospedar!
        </h2>
        <div className="containerCards">
          <CardHotel
            title="Hotel 1"
            description="lorem dskoandsan ndsoandisnaio ndsioanodinasidnsad dosandoasdi"
            path="https://cdn.panrotas.com.br/portal-panrotas-statics/media-files-cache/301395/078fea0259c5b673bf2d35bcc14f0da5pestanaalvorsouthbeachexterior5/61,0,2424,1447/1206,720,0.24/0/default.jpg"
          />
          <CardHotel
            title="Hotel 1"
            description="lorem dskoandsan ndsoandisnaio ndsioanodinasidnsad dosandoasdi"
            path="https://cdn.panrotas.com.br/portal-panrotas-statics/media-files-cache/301395/078fea0259c5b673bf2d35bcc14f0da5pestanaalvorsouthbeachexterior5/61,0,2424,1447/1206,720,0.24/0/default.jpg"
          />
          <CardHotel
            title="Hotel 1"
            description="lorem dskoandsan ndsoandisnaio ndsioanodinasidnsad dosandoasdi"
            path="https://cdn.panrotas.com.br/portal-panrotas-statics/media-files-cache/301395/078fea0259c5b673bf2d35bcc14f0da5pestanaalvorsouthbeachexterior5/61,0,2424,1447/1206,720,0.24/0/default.jpg"
          />
          <CardHotel
            title="Hotel 1"
            description="          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate natus est, laudantium nobis temporibus at laborum expedita ducimus, voluptas dolor cupiditate nostrum facere et vel, tempora numquam? Expedita, esse eligendi.          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate natus est, laudantium nobis temporibus at laborum expedita ducimus, voluptas dolor cupiditate nostrum facere et vel, tempora numquam? Expedita, esse eligendi."
            path="https://cdn.panrotas.com.br/portal-panrotas-statics/media-files-cache/301395/078fea0259c5b673bf2d35bcc14f0da5pestanaalvorsouthbeachexterior5/61,0,2424,1447/1206,720,0.24/0/default.jpg"
          />
        </div>
      </div>
    </>
  )
}
