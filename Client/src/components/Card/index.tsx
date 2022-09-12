import {
  BiCalendar,
  BiMap,
  BiMoney,
  BiPhoneCall,
  BiPlanet,
  BiTime,
} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { limitDescription } from '../../utils'
import './styles.css'

interface CardProps {
  title: string
  type: 'hotel' | 'restaurante' | 'turismo' | 'lazer&esporte' | 'agenda'
  img: string
  id: number
  description?: string
  date?: string
  locale?: string
  hour?: string
  price?: number
  cell?: string
  email?: string
  website?: string
  latitude?: string
  longitude?: string
  categoria?: string
}

export default function Card({
  title,
  type,
  description,
  date,
  locale,
  hour,
  price,
  cell,
  email,
  website,
  latitude,
  longitude,
  img,
  id,
}: CardProps) {
  return (
    <div className="card">
      <div className="card-container">
        <Link className="card-img" to={`/${type}/detalhe/${id}`}>
          <img src={img} />
        </Link>
        <label className="title margin">{title}</label>
        <div className="description">
          {description ? <p>{limitDescription(description)}</p> : null}
          {email ? (
            <div className="flex items-center">
              {/* <BiMailSend size={16} className="mr-1" /> */}
              <p className="m-0">{email}</p>
            </div>
          ) : null}
          {locale ? (
            <div>
              <div className="flex items-center">
                <BiMap size={16} className="mr-1" />
                <b>Local do evento:</b>
              </div>
              <p>{locale}</p>
            </div>
          ) : null}
        </div>
        <div className="info margin grid grid-cols-2">
          {website ? (
            <div className="website">
              <BiPlanet size={16} className="mr-1" />
              <a href={website}>Visite nosso site</a>
            </div>
          ) : null}
          {price ? (
            <div>
              <BiMoney size={16} className="mr-1" />
              <p>
                <b>R$ {price}</b>
              </p>
            </div>
          ) : null}
          {date ? (
            <div>
              <BiCalendar size={16} className="mr-1" />
              <p>
                <b>{date}</b>
              </p>
            </div>
          ) : null}
          {hour ? (
            <div>
              <BiTime size={16} className="mr-1" />
              <p>
                <b>{hour}</b>
              </p>
            </div>
          ) : null}
          {cell ? (
            <div>
              <BiPhoneCall size={16} className="mr-1" />
              <p>
                <b>{cell}</b>
              </p>
            </div>
          ) : null}
        </div>
      </div>
      <div className="redirect">
        <Link id="cardMore" className="margin" to={`/${type}/detalhe/${id}`}>
          Ver mais
        </Link>
        {latitude && longitude && (
          <a
            id="cardMap"
            target="_blank"
            href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
            rel="noreferrer"
          >
            Abrir no Google Maps
          </a>
        )}
      </div>
    </div>
  )
}
