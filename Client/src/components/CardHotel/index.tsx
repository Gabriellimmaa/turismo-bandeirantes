import { limitDescription } from '../../utils'
import './styles.css'

interface CardProps {
  title: string
  description: string
  path: string
  preco: number
}

export default function CardHotel({
  title,
  description,
  path,
  preco,
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
          {description.length >= 100
            ? limitDescription(description)
            : description}
        </p>
      </div>
      <div className="prieceHotel">
        <strong>Preço: </strong>
        <p>R$ {preco}</p>
      </div>
      <hr />
      <div className="buttonsHotel">
        <a href="">Ver mais</a>
        <a href="">Abrir no Google Maps</a>
      </div>
    </div>
  )
}
