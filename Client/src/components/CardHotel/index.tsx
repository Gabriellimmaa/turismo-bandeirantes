import { Link } from 'react-router-dom'
import './styles.css'

interface CardProps {
  title: string
  email: string
  path: string
  preco: number
  telefone: string
  site: string
  id: number
  latitude: string
  longitude: string
}

export default function CardHotel({
  id,
  title,
  email,
  path,
  preco,
  telefone,
  site,
  latitude,
  longitude,
}: CardProps) {
  return (
    <div className="cardHotel">
      <div className="cardImgHotel">
        <img src={path} alt={title} />
      </div>
      <strong className="titleHotel">{title}</strong>
      <hr />
      <div className="descriptionHotel">
        <p>
          {email}
          <br />
          {telefone}
          <br />
          <a href={site}>{site}</a>
        </p>
      </div>
      <div className="prieceHotel">
        <strong>Preço: </strong>
        <p>R$ {preco}</p>
      </div>
      <hr />
      <div className="buttonsHotel">
        <Link to={`/hotel/${id}`}>Ver mais</Link>
        <a
          target="_blank"
          href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
          rel="noreferrer"
        >
          Abrir no Google Maps
        </a>
      </div>
    </div>
  )
}
