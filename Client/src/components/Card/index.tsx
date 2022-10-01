import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import {
  BiCalendar,
  BiMap,
  BiMoney,
  BiPhoneCall,
  BiPlanet,
  BiTime,
} from 'react-icons/bi'
import { TbToolsKitchen } from 'react-icons/tb'
import { MdMenuBook } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { limitDescription } from '../../utils'
import './styles.css'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import apiLocal from '../../services/apiLocal'

interface CardProps {
  title: string
  type: 'hotel' | 'restaurante' | 'turismo' | 'lazer&esporte' | 'agenda' | 'album' | 'bar'
  img: string
  id: number
  description?: string
  date?: string
  locale?: string
  hour?: string
  price?: number | string
  kitchen?: string
  menu?: string
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
  kitchen,
  menu,
  cell,
  email,
  website,
  latitude,
  longitude,
  img,
  id,
}: CardProps) {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [loading, setLoading] = useState(true)

  async function handleRating(rating: number) {
    apiLocal.post(`/${type}/${id}/feedback/${rating}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    setRating(rating)
    toast.success('Obrigado por avaliar!')
  }

  function Post() {
    return (
      <div>
        <Skeleton height={150} />
        <div className='px-5 pb-5'>
          <div className="right-col py-1">
            <Skeleton height={40} />
          </div>
          <p className="mb-5">
            <Skeleton count={5} />
          </p>
          <div className='grid grid-cols-2 gap-4 my-5'>
            <Skeleton />
            <Skeleton />
          </div>
          <div className='grid grid-cols-2 gap-4 mb-3'>
            <span></span>
            <Skeleton />
          </div>
          <div className='w-full grid grid-cols-2 gap-4 items-center'>
            <Skeleton height={40} />
            <Skeleton height={40} />
          </div>
        </div>
      </div>
    )
  }

  useEffect(() => {
    apiLocal.get(`${type}/${id}`).then((response) => {
      const maiorValor = Math.max.apply(null, response.data.estrelas);
      setLoading(false)
      if (maiorValor == 0) {
        setHover(3)
        return
      }
      const indexMaiorValor = response.data.estrelas.indexOf(maiorValor);
      setHover(indexMaiorValor + 1)
    })
  }, [rating])

  return (
    <div className="card">
      {loading ? (
        <Post />
      ) : (
        <>
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
          </div>
          <div className="card-footer">
            <div className="info margin grid grid-cols-2">
              {website ? (
                <div className="website">
                  <BiPlanet size={16} className="mr-1" />
                  <a href={website}>Visite nosso site</a>
                </div>
              ) : null}
              {kitchen ? (
                <div>
                  <TbToolsKitchen size={16} className="mr-1" />
                  <p>
                    <b>{kitchen}</b>
                  </p>
                </div>
              ) : null}
              {menu ? (
                <div>
                  <MdMenuBook size={16} className="mr-1" />
                  <p>
                    <b>{menu}</b>
                  </p>
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

            <div className="margin star-rating flex justify-end">
              {[...Array(5)].map((_star, index) => {
                index += 1
                return (
                  <button
                    type="button"
                    key={index}
                    className={index <= (hover || rating) ? 'on' : 'off'}
                    onClick={() => handleRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    <span className="star">&#9733;</span>
                  </button>
                )
              })}
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
        </>
      )}
    </div>
  )
}
