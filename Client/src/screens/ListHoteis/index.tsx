import { useEffect, useState } from 'react'
import CardHotel from '../../components/CardHotel'
import { Loading } from '../../components/Loading'
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
  latitude: string
  longitude: string
}

export function Hoteis() {
  const [hoteis, setHoteis] = useState<HoteisProps[]>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    api.get('/hoteis').then((response) => {
      setHoteis(response.data.hoteis)
      setLoading(true)
    })
  }, [])

  if (!loading) {
    return <Loading />
  }

  return (
    <>
      <div className="containerHotel">
        <h1 className="uppercase">Onde ficar?</h1>
        <h2 className="uppercase">
          Encontre hotéis, pousadas e muito outros lugares para se hospedar!
        </h2>
        <div className="containerCards">
          {Array.isArray(hoteis)
            ? hoteis?.map((hotel) => {
                return (
                  <CardHotel
                    key={hotel.id}
                    title={hotel.nome}
                    email={hotel.email}
                    path={hotel.logo}
                    preco={hotel.preco}
                    telefone={hotel.telefone}
                    site={hotel.site}
                    id={hotel.id}
                    latitude={hotel.latitude}
                    longitude={hotel.longitude}
                  />
                )
              })
            : null}
        </div>
      </div>
    </>
  )
}
