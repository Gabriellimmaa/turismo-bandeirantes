import { Carousel } from '../../components/Carousel'
import { GiSoccerBall } from 'react-icons/gi'

export default function Inicio() {
  return (
    <>
      <div className="w-full h-[65%]">
        <Carousel />
      </div>
      <div className="w-full mx-6 h-full mb-10">
        <div className="w-full mt-10 ">
          <h1 className="flex justify-center my-16 text-4xl font-extrabold uppercase">
            Acesso rápido
          </h1>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <h2>
              <GiSoccerBall />
            </h2>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Lazer e esporte</div>
              <p className="text-gray-700 text-base">
                Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
                muito ar puro e belos momentos natureza
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
