import './styles.css'

interface ObjectItem {
  id: string
  nome: string
  categoria: string
  type?: string
}

interface ToolbarProps {
  objectList: ObjectItem[]
}

export default function Toolbar({ objectList }: ToolbarProps) {
  return (
    <div className="Toolbar">
      <ul>
        {objectList.map((data: ObjectItem) => (
          data.categoria ? (
            <li key={data.id}>
                {/* passar a categoria e mostrar os cards de acordo com a categoria */}
              {/* <button onClick={data.categoria}>{data.nome}</button> */}
            </li>
          ) : (
            <li key={data.id}>
             <button>{data.nome}</button>
            </li>
        )))}
      </ul>
    </div>
  )
}
