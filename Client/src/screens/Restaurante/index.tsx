import Card from '../../components/Card'
import './styles.css'
import Toolbar from '../../components/Toolbar'
import { optionRestaurante } from './optionData'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Loading } from '../../components/Loading'

interface turismoProps {
  id: number
  nome: string
  descricao: string
  logo: string
  preco: string
  cardapio: string | null
  cozinhas: string
  telefone: string
  latitude: string
  longitude: string
  categoria: string
}

export default function Restaurantes() {
  const [restaurantes, setRestaurantes] = useState<turismoProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/restaurantes').then((response) => {
      setRestaurantes(response.data.restaurantes)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <section id="restaurante">
      <div className="title-style-1">
        <h1>RESTAURANTES</h1>
        <h2>ado a ado quem leu é viado</h2>
      </div>

      <Toolbar objectList={optionRestaurante} />
      <div className="grid grid-cols-3 gap-5 justify-items-center">
        {restaurantes.map((data) => {
          return (
            <Card
              key={data.id}
              title={data.nome}
              description={data.descricao}
              cell={data.telefone}
              price={data?.preco ? data.preco : ''}
              kitchen={data?.cozinhas ? data.cozinhas : ''}
              menu={data?.cardapio ? data.cardapio : ''}
              latitude={data.latitude}
              longitude={data.longitude}
              img={data.logo}
              id={data.id}
              type="restaurante"
            />
          )
        })}
      </div>
    </section>
  )
}
