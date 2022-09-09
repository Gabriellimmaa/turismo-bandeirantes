import Card from '../../components/Card'
import './styles.css'
import Navbar from '../../components/Navbar'
import { optionRestaurante } from './optionData'

export default function Restaurantes() {
  return (
    <section id="restaurante">
      <div className='title-style-1'>
        <h1>RESTAURANTES</h1>
        <h2>ado a ado quem leu é viado</h2>
      </div>
      
      <Navbar objectList={optionRestaurante} />
      <div className="grid grid-cols-3 gap-5 justify-items-center">
        <Card
          id={1}
          type="restaurante"
          img="src\assets\img\restaurante\01.jpg"
          title="Bom de garfo"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quisquam, vitae fugit amet fugiat accusantium consequuntur delectus enim commodi aperiam molestias repellendus mollitia ullam esse ipsam repudiandae nisi debitis facere?"
          hour="07:00 às 19:00"
          latitude='-23.550520'
          longitude='-46.633309'
        />
        <Card
          id={1}
          type="restaurante"
          img="src\assets\img\restaurante\01.jpg"
          title="Bom de garfo"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quisquam, vitae fugit amet fugiat accusantium consequuntur delectus enim commodi aperiam molestias repellendus mollitia ullam esse ipsam repudiandae nisi debitis facere?"
          hour="07:00 às 19:00"
          latitude='-23.550520'
          longitude='-46.633309'
        />
        <Card
          id={1}
          type="restaurante"
          img="src\assets\img\restaurante\01.jpg"
          title="Bom de garfo"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quisquam, vitae fugit amet fugiat accusantium consequuntur delectus enim commodi aperiam molestias repellendus mollitia ullam esse ipsam repudiandae nisi debitis facere?"
          hour="07:00 às 19:00"
          latitude='-23.550520'
          longitude='-46.633309'
        />
        <Card
          id={1}
          type="restaurante"
          img="src\assets\img\restaurante\01.jpg"
          title="Bom de garfo"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quisquam, vitae fugit amet fugiat accusantium consequuntur delectus enim commodi aperiam molestias repellendus mollitia ullam esse ipsam repudiandae nisi debitis facere?"
          hour="07:00 às 19:00"
          latitude='-23.550520'
          longitude='-46.633309'
        />
        <Card
          id={1}
          type="restaurante"
          img="src\assets\img\restaurante\01.jpg"
          title="Bom de garfo"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quisquam, vitae fugit amet fugiat accusantium consequuntur delectus enim commodi aperiam molestias repellendus mollitia ullam esse ipsam repudiandae nisi debitis facere?"
          hour="07:00 às 19:00"
          latitude='-23.550520'
          longitude='-46.633309'
        />
      </div>
    </section>
  )
}
