import React from 'react'
import Card from '../../components/Card'
import {MdFastfood} from 'react-icons/md'
import './styles.css'

export default function Restaurantes() {
  return (
    <div id="restaurante" >
      <h1 className='text-center w-full text-5xl'>
        RESTAURANTES
      </h1>
      <div className='option'>
        <ul className='bg-gray-200'>
          <li>Restaurante</li>
          <li>Lanchonete</li>
          <li>Bar</li>
          <li>Pizzaria</li>
          <li>Padaria</li>
        </ul>
      </div>
      <div className="grid grid-cols-3 gap-5 justify-items-center">
        <Card title='Bom de garfo' description='asdasd' date='07:00 às 19:00' redirectDetail='https://xvideos.com' redirectMap='https://xvideos.com' />
        <Card title='Bom de garfo' description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic qui tenetur similique perferendis dolores enim corrupti, inventore commodi a, consequatur accusamus iusto rerum iure delectus, alias sit maiores itaque odit.' date='07:00 às 19:00' redirectDetail='https://xvideos.com' redirectMap='https://xvideos.com' />
        <Card title='Bom de garfo' description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic qui tenetur similique perferendis dolores enim corrupti, inventore commodi a, consequatur accusamus iusto rerum iure delectus, alias sit maiores itaque odit.' date='07:00 às 19:00' redirectDetail='https://xvideos.com' redirectMap='https://xvideos.com' />
        <Card title='Bom de garfo' description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic qui tenetur similique perferendis dolores enim corrupti, inventore commodi a, consequatur accusamus iusto rerum iure delectus, alias sit maiores itaque odit.' date='07:00 às 19:00' redirectDetail='https://xvideos.com' redirectMap='https://xvideos.com' />
        <Card title='Bom de garfo' description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic qui tenetur similique perferendis dolores enim corrupti, inventore commodi a, consequatur accusamus iusto rerum iure delectus, alias sit maiores itaque odit.' date='07:00 às 19:00' redirectDetail='https://xvideos.com' redirectMap='https://xvideos.com' />
        <Card title='Bom de garfo' description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic qui tenetur similique perferendis dolores enim corrupti, inventore commodi a, consequatur accusamus iusto rerum iure delectus, alias sit maiores itaque odit.' date='07:00 às 19:00' redirectDetail='https://xvideos.com' redirectMap='https://xvideos.com' />
        <Card title='Bom de garfo' description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic qui tenetur similique perferendis dolores enim corrupti, inventore commodi a, consequatur accusamus iusto rerum iure delectus, alias sit maiores itaque odit.' date='07:00 às 19:00' redirectDetail='https://xvideos.com' redirectMap='https://xvideos.com' />
      </div>
    </div>
  )
}