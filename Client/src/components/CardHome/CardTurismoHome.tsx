import './CardTurismo.css'
interface CardTurismoHomeProps {
  title: string
  path: string
}

export function CardTurismoHome({ title, path }: CardTurismoHomeProps) {
  return (
    <div className="max-w-xs cardTurismoHome">
      <div className="max-w-xs px-4 flex flex-col  justify-around items-center absolute w-full h-full titleSobrebor ">
        <p className="text-white text-center text-2xl">{title}</p>
        <button className="bg-transparent rounded-2xl border px-5 py-1 text-white border-white">
          Saiba Mais
        </button>
      </div>
      <img className="bg-cover bg-center" src={path} alt={title} />
    </div>
  )
}
