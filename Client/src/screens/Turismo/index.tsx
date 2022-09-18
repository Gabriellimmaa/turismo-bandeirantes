import Toolbar from '../../components/Toolbar'
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
  categoria: string
}

export function Turismo() {
  const [turismo, setTurismo] = useState<turismoProps[]>([])

  const [loading, setLoading] = useState(true)

  const [religioso, setReligioso] = useState(false)

  const [cultural, setCultural] = useState(false)

  const [ecologico, setEcologico] = useState(false)

  useEffect(() => {
    api.get('/atracoes').then((response) => {
      setTurismo(response.data.atracoes)
      setLoading(false)
    })
  }, [])

  function Cultural() {
    setCultural(true)
  }

  function Religioso() {
    setReligioso(true)
  }

  function Ecologico() {
    setEcologico(true)
  }

  if (religioso) {
    const atracoesReligioso = turismo.filter(
        (turismo) => turismo.categoria === 'R5ligioso',
      )
    return (

        
      <section className="turismo">
        <div className="title-style-1">
          <h1>O que fazer?</h1>
          <h2>Um lugar de fé, natureza e tradições</h2>
        </div>
        <Toolbar objectList={optionTurismo} />
        {
          loading ? <Loading /> : null
        }
        <div id="grid" className="grid grid-cols-3 gap-5 justify-items-center">
          {atracoesReligioso.map((atracao) => {
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
          })}
        </div>
      </section>
    )
  }

  if (cultural) {
    const atracoesCultural = turismo.filter(
        (turismo) => turismo.categoria === 'Cultural',
      )
    return (
      <section className="turismo">
        <div className="title-style-1">
          <h1>O que fazer?</h1>
          <h2>Um lugar de fé, natureza e tradições</h2>
        </div>
        <Toolbar objectList={optionTurismo} />
        {
          loading ? <Loading /> : null
        }
        <div id="grid" className="grid grid-cols-3 gap-5 justify-items-center">
          {atracoesCultural.map((atracao) => {
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
          })}
        </div>
      </section>
    )
  }


  if (ecologico) {
    const atracoesEcologico = turismo.filter(
        (turismo) => turismo.categoria === 'Ecologico',
      )
    return (
      <section className="turismo">
        <div className="title-style-1">
          <h1>O que fazer?</h1>
          <h2>Um lugar de fé, natureza e tradições</h2>
        </div>
        <Toolbar objectList={optionTurismo} />
        {
          loading ? <Loading /> : null
        }
        <div id="grid" className="grid grid-cols-3 gap-5 justify-items-center">
          {atracoesEcologico.map((atracao) => {
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
          })}
        </div>
      </section>
    )
  }

  return (
    <section className="turismo">
      <div className="title-style-1">
        <h1>O que fazer?</h1>
        <h2>Um lugar de fé, natureza e tradições</h2>
      </div>
      <Toolbar objectList={optionTurismo} />
      {
        loading ? <Loading /> : null
      }
      <div id="grid" className="grid grid-cols-3 gap-5 justify-items-center">
        {turismo.map((atracao) => {
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
        })}
      </div>
    </section>
  )
}
