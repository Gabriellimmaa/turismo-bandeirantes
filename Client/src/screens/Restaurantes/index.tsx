import React from 'react'
import Card from '../../components/Card'
import {MdFastfood} from 'react-icons/md'
import './styles.css'
import Navbar from '../../components/Navbar'

export default function Restaurantes() {
  const objectList = [
    {
      "id": "01",
      "nome": "Restaurante",
    },
    {
      "id": "02",
      "nome": "Lanchonete",
    },
    {
      "id": "03",
      "nome": "Bar",
    },
    {
      "id": "04",
      "nome": "Pizzaria",
    },
    {
      "id": "05",
      "nome": "Padaria",
    }
  ]
  return (
    <section id="restaurante" >
      <h1 className='text-center w-full text-5xl'>
        RESTAURANTES
      </h1>
      <Navbar objectList={objectList} />
      <div className="grid grid-cols-3 gap-5 justify-items-center">
        <Card path='src\assets\img\restaurante\01.jpg' title='Bom de garfo' description='asdasd' date='07:00 às 19:00' redirectDetail='https://xvideos.com' redirectMap='https://xvideos.com' />
        <Card path='src\assets\img\restaurante\01.jpg' title='Bom de garfo' description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic qui tenetur similique perferendis dolores enim corrupti, inventore commodi a, consequatur accusamus iusto rerum iure delectus, alias sit maiores itaque odit.' date='07:00 às 19:00' redirectDetail='https://xvideos.com' redirectMap='https://xvideos.com' />
        <Card path='src\assets\img\restaurante\01.jpg' title='Bom de garfo' description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic qui tenetur similique perferendis dolores enim corrupti, inventore commodi a, consequatur accusamus iusto rerum iure delectus, alias sit maiores itaque odit.' date='07:00 às 19:00' redirectDetail='https://xvideos.com' redirectMap='https://xvideos.com' />
        <Card path='src\assets\img\restaurante\01.jpg' title='Bom de garfo' description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic qui tenetur similique perferendis dolores enim corrupti, inventore commodi a, consequatur accusamus iusto rerum iure delectus, alias sit maiores itaque odit.' date='07:00 às 19:00' redirectDetail='https://xvideos.com' redirectMap='https://xvideos.com' />
        <Card path='src\assets\img\restaurante\01.jpg' title='Bom de garfo' description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic qui tenetur similique perferendis dolores enim corrupti, inventore commodi a, consequatur accusamus iusto rerum iure delectus, alias sit maiores itaque odit.' date='07:00 às 19:00' redirectDetail='https://xvideos.com' redirectMap='https://xvideos.com' />
        <Card path='src\assets\img\restaurante\01.jpg' title='Bom de garfo' description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic qui tenetur similique perferendis dolores enim corrupti, inventore commodi a, consequatur accusamus iusto rerum iure delectus, alias sit maiores itaque odit.' date='07:00 às 19:00' redirectDetail='https://xvideos.com' redirectMap='https://xvideos.com' />
        <Card path='src\assets\img\restaurante\01.jpg' title='Bom de garfo' description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic qui tenetur similique perferendis dolores enim corrupti, inventore commodi a, consequatur accusamus iusto rerum iure delectus, alias sit maiores itaque odit.' date='07:00 às 19:00' redirectDetail='https://xvideos.com' redirectMap='https://xvideos.com' />
        <Card path='src\assets\img\restaurante\01.jpg' title='Bom de garfo' description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic qui tenetur similique perferendis dolores enim corrupti, inventore commodi a, consequatur accusamus iusto rerum iure delectus, alias sit maiores itaque odit.' date='07:00 às 19:00' redirectDetail='https://xvideos.com' redirectMap='https://xvideos.com' />
      </div>
    </section>
  )
}