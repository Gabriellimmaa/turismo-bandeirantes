import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'

import './styles.css'

interface HoteisProps {
  id: number
  nome: string
  preco: number
  logo: string
  email: string
  site: string
  telefone: string
  endereco: string
  maps: string
  whats: string
  insta: string
  face: string
  aitvo: number
  created_at: string
  updated_at: string
}

export function Hotel() {
  const { id } = useParams()
  const [hotel, setHotel] = useState<HoteisProps>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get(`/hoteis/${id}`).then((response) => {
      setHotel(response.data.hoteis[0])
      setLoading(false)
    })
  }, [])

  if (!loading) {
    ;<div></div>
  }

  return (
    <>
      <div className="heroHotel">
        <img src={hotel?.logo} alt="" />
      </div>

      <div className="containerHotel">
        <h1>{hotel?.nome}</h1>
      </div>
    </>
  )
}
