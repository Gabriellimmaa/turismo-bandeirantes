import Card from '../../components/Card'
import './styles.css'
import Toolbar from '../../components/Toolbar'
import { optionRestaurante } from './optionData'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Loading } from '../../components/Loading'
import { useTranslation } from 'react-i18next'

interface turismoProps {
  id: number
  nome: string
  descricao: string
  logo: string
  preco: string
  cardapio?: string
  cozinhas: string
  telefone: string
  latitude: string
  longitude: string
  categoria: string
}

export default function Restaurantes() {
  const [restaurantes, setRestaurantes] = useState<turismoProps[]>([])
  const [bares, setBares] = useState<turismoProps[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<string>('')
  const { t } = useTranslation()

  useEffect(() => {
    api.get('/restaurantes').then((response) => {
      setRestaurantes(response.data.restaurantes)
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    api.get('/bares').then((response) => {
      setBares(response.data.bares)
      setLoading(false)
    })
  }, [])

  const filtro = (childdata: string) => {
    setFilter(childdata)
  }

  return (
    <section id="restaurante">
      <div className="title-style-1">
        <h1>{t('paginas.restaurantes.titulo')}</h1>
        <h2>{t('paginas.restaurantes.subtitulo')}</h2>
      </div>
      <Toolbar objectList={optionRestaurante} filtro={filtro} />
      {loading ? <Loading /> : null}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
        {restaurantes.map((data) => {
          if (filter === 'all' || filter === '') {
            return (
              <Card
                key={data.id}
                title={data.nome}
                description={data.descricao}
                cell={data.telefone}
                kitchen={data?.cozinhas ? data.cozinhas : ''}
                menu={data?.cardapio ? data.cardapio : ''}
                latitude={data.latitude}
                longitude={data.longitude}
                img={data.logo}
                id={data.id}
                type="restaurante"
              />
            )
          } else if (filter === 'restaurante') {
            return (
              <Card
                key={data.id}
                title={data.nome}
                description={data.descricao}
                cell={data.telefone}
                kitchen={data?.cozinhas ? data.cozinhas : ''}
                menu={data?.cardapio ? data.cardapio : ''}
                latitude={data.latitude}
                longitude={data.longitude}
                img={data.logo}
                id={data.id}
                type="restaurante"
              />
            )
          }
          return null
        })}

        {/** Bares */}
        {bares.map((data) => {
          if (filter === 'all' || filter === '') {
            return (
              <Card
                key={data.id}
                title={data.nome}
                description={data.descricao}
                cell={data.telefone}
                kitchen={data?.cozinhas ? data.cozinhas : ''}
                menu={data?.cardapio ? data.cardapio : ''}
                latitude={data.latitude}
                longitude={data.longitude}
                img={data.logo}
                id={data.id}
                type="bar"
              />
            )
          } else if (filter === 'bar') {
            return (
              <Card
                key={data.id}
                title={data.nome}
                description={data.descricao}
                cell={data.telefone}
                kitchen={data?.cozinhas ? data.cozinhas : ''}
                menu={data?.cardapio ? data.cardapio : ''}
                latitude={data.latitude}
                longitude={data.longitude}
                img={data.logo}
                id={data.id}
                type="bar"
              />
            )
          }
          return null
        })}
      </div>
    </section>
  )
}
