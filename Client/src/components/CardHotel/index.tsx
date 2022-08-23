import { FaHamburger, FaShower, FaWind } from 'react-icons/fa'
import { limitDescription } from '../../utils'
import './styles.css'

interface CardProps {
  title: string
  description: string
  path: string
}

export default function CardHotel({ title, description, path }: CardProps) {
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
      <div className="iconsHotel">
        <FaShower size={24} color="#283729" />
        <FaWind size={24} color="#283729" />
        <FaHamburger size={24} color="#283729" />
        <strong>Oferece: </strong>
      </div>
      <hr />
      <div className="buttonsHotel">
        <a href="">Ver mais</a>
        <a href="">Abrir no Google Maps</a>
      </div>
    </div>
  )
}
