import './styles.css'

interface NavbarProps {
  item1: string
  item2: string
  item3: string
}   

export default function Navbar({
  item1,  
  item2,
  item3,
}: NavbarProps) {
  return (
    <div className='navbar'>
      <ul>
        <li>{item1}</li>
        <li>{item2}</li>
        <li>{item3}</li>
      </ul>  
    </div>
  )    
}