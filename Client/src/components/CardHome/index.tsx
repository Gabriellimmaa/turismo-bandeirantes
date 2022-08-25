import { ReactNode } from 'react'

interface CardHomeProps {
  link: string
  icon: ReactNode
  titulo: string
  corpo: string
}

export function CardHome({ link, icon, titulo, corpo }: CardHomeProps) {
  return (
    <a href={link}>
      <div className="max-w-[23.999rem] min-h-[14.621rem] rounded  shadow-lg hover:bg-grayHover transition-all duration-900 ">
        <h2 className="flex py-4 justify-center">{icon}</h2>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{titulo}</div>
          <p className="text-gray-700 text-base">{corpo}</p>
        </div>
      </div>
    </a>
  )
}
