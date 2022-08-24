import Card from '../../components/Card'
import Navbar from '../../components/Navbar'
import { optionAgenda } from './optionData'
import './styles.css'

export function Agenda() {
  return (
    <section id="agenda">
      <h1 className="text-center w-full text-5xl">AGENDA</h1>
      <Navbar objectList={optionAgenda} />
      <div className="grid grid-cols-3 gap-5 justify-items-center mt-6">
        <div className="w-[23.999rem] min-h-[14.621rem] rounded overflow-hidden shadow-lg">
          <h2 className="flex py-2 justify-center">Texte</h2>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Lazer e esporte</div>
            <p className="text-gray-700 text-base">
              Nossa cidade é o seu destino perfeito Cultura, esporte, lazer,
              muito ar puro e belos momentos natureza
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
