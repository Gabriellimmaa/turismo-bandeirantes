import { Link } from 'react-router-dom'
import './styles.css'

interface CardProps {
  title: string
  description: string
  path: string
  preco: number
  telefone: string
  site: string
  id: number
}

export default function CardHotel({
  title,
  description,
  path,
  preco,
  telefone,
  site,
  id,
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
          {description}
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
        <a href="">Abrir no Google Maps</a>
      </div>
    </div>
  )
}
