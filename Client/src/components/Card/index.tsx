import { BiMap, BiTime } from 'react-icons/bi'
import { limitDescription } from '../../utils'
import './styles.css'

interface CardProps {
  title: string
  description: string
  date: string
  redirectMap: string
  redirectDetail: string
  path: string
}

export default function Card({
  title,
  description,
  date,
  redirectMap,
  redirectDetail,
  path,
}: CardProps) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={path} />
      </div>
      <label className="title margin">{title}</label>
      <div className="description margin">
        <p>{limitDescription(description)}</p>
      </div>
      <div className="info margin grid grid-cols-2">
        <div>
          <BiTime size={16} className="mr-1" />
          <p>{date}</p>
        </div>
        <div>
          <BiMap size={16} className="mr-1" />
          <a href={redirectMap} target="_blank" rel="noreferrer">
            Abrir com google maps
          </a>
        </div>
      </div>
      <div className="redirect">
        <a className="margin" href={redirectDetail}>
          Ver mais
        </a>
      </div>
    </div>
  )
}
