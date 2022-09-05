import Navbar from '../../components/Navbar'
import Card from '../../components/Card'
import './style.css'
import { optionTurismo } from './optionData'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Loading } from '../../components/Loading'

interface turismoProps {
  id: number
  nome: string
  descricao: string
  logo: string
  telefone: string
  latitude: string
  longitude: string
}

export function Turismo() {
  const [turismo, setTurismo] = useState<turismoProps[]>([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/atracoes').then((response) => {
      setTurismo(response.data.atracoes)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <section className="turismo">
      <h1>O que fazer?</h1>
      <h2>Um lugar de fé, natureza e tradições</h2>
      <Navbar objectList={optionTurismo} />
      <div id="grid" className="grid grid-cols-3 gap-5 justify-items-center">
        {turismo.map((atracao) => {
          return (
            <Card
              key={atracao.id}
              title={atracao.nome}
              description={atracao.descricao}
              date={atracao.telefone}
              latitude={atracao.latitude}
              longitude={atracao.longitude}
              path={atracao.logo}
              id={atracao.id}
              redirectDetail={`/turismo/${atracao.id}`}
            />
          )
        })}
      </div>
    </section>
  )
}
