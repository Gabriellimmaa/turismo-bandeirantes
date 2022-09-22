import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

import {
    BiCalendar,
    BiMap,
    BiMoney,
    BiPhoneCall,
    BiPlanet,
    BiTime,
} from 'react-icons/bi'
import { limitDescription, limitDescriptionCustom } from '../../utils'

interface CardAgendaProps {
    titulo: string
    descricao: string
    data: string
    imagem: string
}

export function CardAgenda({ titulo, descricao, data, imagem }: CardAgendaProps) {
    return (
        <div className="card-agenda w-full">
            <div className='card-agenda-container'>
                <div className='flex justify-center w-full'>
                    <img src={imagem} />
                </div>
                <div className='overflow-auto'>
                    <h1>{titulo}</h1>
                    <p><BiCalendar size={20} /> {data}</p>
                    <p>{descricao}</p>
                </div>
            </div>
        </div>
    )
}
