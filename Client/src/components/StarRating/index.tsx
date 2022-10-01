import { useState } from 'react'
import { toast } from 'react-toastify'
import apiLocal from '../../services/apiLocal'
import './styles.css'

interface StarRatingProps {
  id: number | string | undefined
  type: 'turismo' | 'hotel' | 'restaurante'
  hover: number
  setHover: Function
  setDataLocal: Function
  dataLocal: { estrelas: number[]; comentarios: object[] }
}

export function StarRating({
  id,
  type,
  hover,
  setHover,
  setDataLocal,
  dataLocal,
}: StarRatingProps) {
  const [rating, setRating] = useState(0)

  async function handleRating(rating: number) {
    apiLocal.post(`/${type}/${id}/feedback/${rating}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const lista: number[] = [
      dataLocal.estrelas[0],
      dataLocal.estrelas[1],
      dataLocal.estrelas[2],
      dataLocal.estrelas[3],
      dataLocal.estrelas[4],
    ]
    lista[rating - 1] += 1
    setDataLocal({ ...dataLocal, estrelas: lista })
    setRating(rating)
    toast.success('Obrigado por avaliar!')
  }

  return (
    <div className="star-rating ml-auto">
      {[...Array(5)].map((star, index) => {
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
  )
}
