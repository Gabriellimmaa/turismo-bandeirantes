import Toolbar from '../../components/Toolbar'
import Card from '../../components/Card'
import './style.css'
import { optionTurismo } from './optionData'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Loading } from '../../components/Loading'

import { useTranslation } from 'react-i18next'

interface turismoProps {
  id: number
  nome: string
  descricao: string
  logo: string
  telefone: string
  latitude: string
  longitude: string
  categoria: string
}

export function Turismo() {
  const [filter, setFilter] = useState<string>('')
  const [turismo, setTurismo] = useState<turismoProps[]>([])
  const [loading, setLoading] = useState(true)
  const { t } = useTranslation()

  useEffect(() => {
    api.get('/atracoes').then((response) => {
      setTurismo(response.data.atracoes)
      setLoading(false)
    })
  }, [])

  const filtro = (childdata: string) => {
    setFilter(childdata)
  }

  return (
    <section className="turismo">
      <div className="title-style-1">
        <h1>{t('paginas.turismo.titulo')}</h1>
        <h2>{t('paginas.turismo.subtitulo')}</h2>
      </div>
      <Toolbar objectList={optionTurismo} filtro={filtro} />
      {loading ? <Loading /> : null}
      <div
        id="grid"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center"
      >
        {turismo.map((atracao) => {
          if (filter === 'all' || filter === '') {
            return (
              <Card
                key={atracao.id}
                title={atracao.nome}
                description={atracao.descricao}
                cell={atracao.telefone}
                latitude={atracao.latitude}
                longitude={atracao.longitude}
                img={atracao.logo}
                id={atracao.id}
                type="turismo"
              />
            )
          } else if (atracao.categoria === filter) {
            return (
              <Card
                key={atracao.id}
                title={atracao.nome}
                description={atracao.descricao}
                cell={atracao.telefone}
                latitude={atracao.latitude}
                longitude={atracao.longitude}
                img={atracao.logo}
                id={atracao.id}
                type="turismo"
              />
            )
          }
          return null
        })}
      </div>
    </section>
  )
}
