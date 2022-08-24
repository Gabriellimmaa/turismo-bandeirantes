import './styles.css'

interface ObjectItem {
  id: string
  nome: string
}

interface NavbarProps {
  objectList: ObjectItem[]
}

export default function Navbar({ objectList }: NavbarProps) {
  return (
    <div className='navbar'>
      <ul>
        {objectList.map((data: ObjectItem) => (
          <li>
            <button>{data.nome}</button>
          </li>
        )
        )}
      </ul>
    </div>
  )
}