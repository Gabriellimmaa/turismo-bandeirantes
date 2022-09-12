import './styles.css'
import { Link } from 'react-router-dom'

interface ObjectItem {
  id: string
  nome: string
  categoria?: string
  type?: string
}

interface NavbarProps {
  objectList: ObjectItem[]
}

export default function Navbar({ objectList }: NavbarProps) {
  return (
    <div className="navbar">
      <ul>
        {objectList.map((data: ObjectItem) => (
          data.categoria ? (
            <li key={data.id}>
              <Link to={`/${data.type}/${data.categoria}`}><button>{data.nome}</button></Link>
            </li>
          ) : (
            <li key={data.id}>
              <Link to={`/${data.type}/${data.nome}`}><button>{data.nome}</button></Link>
            </li>
        )))}
      </ul>
    </div>
  )
}
