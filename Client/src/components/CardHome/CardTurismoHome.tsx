import { Link } from 'react-router-dom'
import './CardTurismo.css'
interface CardTurismoHomeProps {
  title: string
  path: string
  id: number
}

export function CardTurismoHome({ title, path, id }: CardTurismoHomeProps) {
  return (
    <div className="max-w-xs cardTurismoHome rounded-xl">
      <div className="max-w-xs px-4 flex flex-col rounded-xl justify-around items-center absolute w-full h-full titleSobrebor">
        <p className="text-white text-center text-2xl">{title}</p>
        <Link
          to={`/turismo/${id}`}
          className="bg-transparent rounded-2xl border px-5 py-1 text-white border-white hover:bg-green-brasao hover:text-white hover:border-transparent animate-ease-in-out transition duration-200"
        >
          Saiba Mais
        </Link>
      </div>
      <img className="rounded-xl bg-cover bg-center" src={path} alt={title} />
    </div>
  )
}
