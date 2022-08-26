import Card from '../../components/Card'
import './styles.css'
import Navbar from '../../components/Navbar'
import { optionRestaurante } from './optionData'

export default function Restaurantes() {
  return (
    <section id="restaurante">
      <h1 className="text-center w-full text-5xl">RESTAURANTES</h1>
      <Navbar objectList={optionRestaurante} />
      <div className="grid grid-cols-3 gap-5 justify-items-center">
        <Card
          path="src\assets\img\restaurante\01.jpg"
          title="Bom de garfo"
          description="asdasd"
          date="07:00 às 19:00"
          redirectDetail="https://xvideos.com"
          redirectMap="https://xvideos.com"
        />
        <Card
          path="src\assets\img\restaurante\01.jpg"
          title="Bom de garfo"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic qui tenetur similique perferendis dolores enim corrupti, inventore commodi a, consequatur accusamus iusto rerum iure delectus, alias sit maiores itaque odit."
          date="07:00 às 19:00"
          redirectDetail="https://xvideos.com"
          redirectMap="https://xvideos.com"
        />
        <Card
          path="src\assets\img\restaurante\01.jpg"
          title="Bom de garfo"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic qui tenetur similique perferendis dolores enim corrupti, inventore commodi a, consequatur accusamus iusto rerum iure delectus, alias sit maiores itaque odit."
          date="07:00 às 19:00"
          redirectDetail="https://xvideos.com"
          redirectMap="https://xvideos.com"
        />
        <Card
          path="src\assets\img\restaurante\01.jpg"
          title="Bom de garfo"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic qui tenetur similique perferendis dolores enim corrupti, inventore commodi a, consequatur accusamus iusto rerum iure delectus, alias sit maiores itaque odit."
          date="07:00 às 19:00"
          redirectDetail="https://xvideos.com"
          redirectMap="https://xvideos.com"
        />
        <Card
          path="src\assets\img\restaurante\01.jpg"
          title="Bom de garfo"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic qui tenetur similique perferendis dolores enim corrupti, inventore commodi a, consequatur accusamus iusto rerum iure delectus, alias sit maiores itaque odit."
          date="07:00 às 19:00"
          redirectDetail="https://xvideos.com"
          redirectMap="https://xvideos.com"
        />
        <Card
          path="src\assets\img\restaurante\01.jpg"
          title="Bom de garfo"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic qui tenetur similique perferendis dolores enim corrupti, inventore commodi a, consequatur accusamus iusto rerum iure delectus, alias sit maiores itaque odit."
          date="07:00 às 19:00"
          redirectDetail="https://xvideos.com"
          redirectMap="https://xvideos.com"
        />
        <Card
          path="src\assets\img\restaurante\01.jpg"
          title="Bom de garfo"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic qui tenetur similique perferendis dolores enim corrupti, inventore commodi a, consequatur accusamus iusto rerum iure delectus, alias sit maiores itaque odit."
          date="07:00 às 19:00"
          redirectDetail="https://xvideos.com"
          redirectMap="https://xvideos.com"
        />
        <Card
          path="src\assets\img\restaurante\01.jpg"
          title="Bom de garfo"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic qui tenetur similique perferendis dolores enim corrupti, inventore commodi a, consequatur accusamus iusto rerum iure delectus, alias sit maiores itaque odit."
          date="07:00 às 19:00"
          redirectDetail="https://xvideos.com"
          redirectMap="https://xvideos.com"
        />
      </div>
    </section>
  )
}
