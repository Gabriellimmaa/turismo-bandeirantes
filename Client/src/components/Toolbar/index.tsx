import './styles.css'

interface ObjectItem {
  id: string
  nome: string
  categoria: string
  type?: string
}

interface ToolbarProps {
  objectList: ObjectItem[]
  childToParent: (data: string) => void
}

export default function Toolbar({ objectList, childToParent }: ToolbarProps) {
  return (
    <div className="Toolbar">
      <ul>
        {objectList.map((data: ObjectItem) =>
          data.categoria ? (
            <li key={data.id}>
              <button
                type="button"
                onClick={() => childToParent(data.categoria)}
              >
                {data.nome}
              </button>
            </li>
          ) : (
            <li key={data.id}>
              <button>{data.nome}</button>
            </li>
          ),
        )}
      </ul>
    </div>
  )
}
