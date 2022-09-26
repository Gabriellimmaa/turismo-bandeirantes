import { useState } from 'react'
import './styles.css'
import { useTranslation } from 'react-i18next'

interface ObjectItem {
  id: string
  nome: string
  categoria: string
  type?: string
}

interface ToolbarProps {
  objectList: ObjectItem[]
  filtro: (data: string) => void
}

export default function Toolbar({ objectList, filtro }: ToolbarProps) {
  const [selected, setSelected] = useState('')
  const { t } = useTranslation()
  function changeOption(id: any, category: any) {
    filtro(category)
    setSelected(id)
  }

  return (
    <div className="toolbar">
      <div className="select">
        Ordenar por:
        <select
          onChange={(event) =>
            changeOption(
              event.target.value,
              event.target.selectedOptions[0].getAttribute('data-category'),
            )
          }
        >
          {objectList.map((data: ObjectItem) =>
            data.categoria ? (
              <option
                key={data.id}
                selected={selected === data.categoria}
                value={data.id}
                data-category={data.categoria}
                className={selected === data.id ? 'selected' : ''}
              >
                {data.nome}
              </option>
            ) : (
              <option key={data.id}>
                <button>
                  {t(`paginas.toolbar.${data.nome.toLowerCase()}`)}
                </button>
              </option>
            ),
          )}
        </select>
      </div>
      <ul>
        {objectList.map((data: ObjectItem) =>
          data.categoria ? (
            <li key={data.id}>
              <button
                type="button"
                onClick={() => {
                  filtro(data.categoria)
                  setSelected(data.id)
                }}
                className={selected === data.id ? 'selected' : ''}
              >
                {t(`paginas.toolbar.${data.nome.toLowerCase()}`)}
              </button>
            </li>
          ) : (
            <li key={data.id}>
              <button>{t(`paginas.toolbar.${data.nome.toLowerCase()}`)}</button>
            </li>
          ),
        )}
      </ul>
    </div>
  )
}
