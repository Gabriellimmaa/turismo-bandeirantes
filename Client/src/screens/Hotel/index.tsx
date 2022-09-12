import { useEffect, useState } from 'react'
import Card from '../../components/Card'
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
    <section id="hotel">
      <div className="title-style-1">
        <h1>Onde ficar?</h1>
        <h2>
          Encontre hotéis, pousadas e muito outros lugares para se hospedar!
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-5 justify-items-center">
        {Array.isArray(hoteis)
          ? hoteis?.map((hotel) => {
              return (
                <Card
                  key={hotel.id}
                  id={hotel.id}
                  img={hotel.logo}
                  title={hotel.nome}
                  price={hotel.preco}
                  type="hoteis"
                  cell={hotel.telefone}
                  email={hotel.email}
                  website={hotel.site}
                  latitude={hotel.latitude}
                  longitude={hotel.longitude}
                />
              )
            })
          : null}
      </div>
    </section>
  )
}
