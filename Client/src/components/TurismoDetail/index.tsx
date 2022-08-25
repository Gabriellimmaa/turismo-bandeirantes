import { useParams } from 'react-router-dom'
import './styles.css'

interface ObjectImg{
  id: string,
  nome: string,
}

interface TurismoDetailProps {
  id: number
  title: string
  description: string
  banner: string
  objectImg: ObjectImg[]
}

export default function TurismoDetail({ objectImg }: TurismoDetailProps) {
  return (
    <div className="turismo-detail">
      <div className="turismo-detail-img">
        <img src="" />
      </div>
      <div className="turismo-detail-description">
        <label className="title">Turismo Religioso</label>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptate, quod, quas, quia voluptates quibusdam nesciunt quae
          voluptatibus quidem doloremque quos. Natus, quia. Quisquam, quae
          voluptatum. Quia, quae. Quibusdam, quae.
        </p>
      </div>
    </div>
  )
}