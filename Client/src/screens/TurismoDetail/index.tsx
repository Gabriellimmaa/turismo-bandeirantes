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
    <div>
      <div className='turismo-logo'>
        <img src={turismo?.logo} alt='' />
      </div>
      <div className='turismo-background'>
        <img src={turismo?.logo} alt='' />
      </div>
      <div className="turismo-detail">
        <h1>{turismo?.nome}</h1>
        <div className="turismo-detail-description">
          <h2>Descrição</h2>
          <p>{turismo?.descricao}</p>
        </div>
      </div>
    </div>
  )
}
