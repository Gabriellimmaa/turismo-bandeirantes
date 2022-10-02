import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

interface CardHomeProps {
  link: string
  icon: ReactNode
  titulo: string
  corpo: string
}

export function CardHome({ link, icon, titulo, corpo }: CardHomeProps) {
  return (
    <Link to={link} className="card-home w-full rounded shadow-lg shadow-gray-200 hover:bg-grayHover transition-all duration-900 px-8 py-8 grid border-1 border-b-gray-200 bg-gray-150">
      <h2 className="icon flex my-3 justify-center">{icon}</h2>
      <div className="flex flex-col justify-center">
        <div className="font-bold text-xl mb-2">{titulo}</div>
        <p className="text-gray-700 text-base m-0">{corpo}</p>
      </div>
    </Link>
  )
}
