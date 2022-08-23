import Card from '../../components/Card'
import './styles.css'

export function Agenda() {
  return (
    <div id="agenda">
      <h1 className="text-center w-full text-5xl">AGENDA</h1>
      <div className="option">
        <ul className="bg-gray-200">
          <li>Todos</li>
          <li>Janeiro</li>
          <li>Fevereiro</li>
          <li>Março</li>
          <li>Abril</li>
          <li>Maio</li>
          <li>Junho</li>
          <li>Julho</li>
          <li>Agosto</li>
          <li>Setembro</li>
          <li>Outubro</li>
          <li>Novembro</li>
          <li>Dezembro</li>
        </ul>
      </div>
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
    </div>
  )
}
