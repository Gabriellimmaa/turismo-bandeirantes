import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import './styles.css'

interface TurismoDetailProps {
  id: number
  title: string
  description: string
  banner: string
}

export function TurismoDetail() {

  const { id } = useParams()
  const [turismo, setTurismo] = useState<TurismoDetailProps>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get(`/turismo/${id}`).then((response) => {
      console.log(response.data)
      setTurismo(response.data.turismo[0])
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="turismo-detail">
      <div className="turismo-detail-img">
        <img src={turismo?.banner} />
      </div>
      <div className="turismo-detail-description">
        <label className="title">{turismo?.title}</label>
        <p>
          {turismo?.description}
        </p>
      </div>
    </div>
  )
}