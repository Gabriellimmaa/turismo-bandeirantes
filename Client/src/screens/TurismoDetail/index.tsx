import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import './styles.css'

interface TurismoDetailProps {
  id: number
  nome: string
  descricao: string
  email: string
  endreco: string
  telefone: string
  site: string
  logo: string
  whats: string
  face: string
  insta: string
  ativo: number
}

export function TurismoDetail() {

  const { id } = useParams()
  const [turismo, setTurismo] = useState<TurismoDetailProps>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get(`/atracoes/${id}`).then((response) => {
      console.log(response.data)
      setTurismo(response.data.atracoes[0])
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="turismo-detail">
      <div className="turismo-detail-img">
        <img src={turismo?.logo} />
      </div>
      <div className="turismo-detail-description">
        <label className="title">{turismo?.nome}</label>
        <p>
          {turismo?.descricao}
        </p>
      </div>
    </div>
  )
}