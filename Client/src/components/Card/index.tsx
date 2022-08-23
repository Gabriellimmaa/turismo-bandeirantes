import React from 'react'
import { BiMap } from 'react-icons/bi'
import { BiTime } from 'react-icons/bi'
import './styles.css'

interface CardProps {
    title: string;
    description: string;
    date: string;
    redirectMap: string;
    redirectDetail: string;
}

export default function Card({title, description, date, redirectMap, redirectDetail}: CardProps) {
    return (
        <div className="card">
            <div className="card-img">
                <img src="src\assets\img\restaurante\01.jpg" />
            </div>
            <div className="card-text">
                <label>{title}</label>
                <div className='description'>
                    <p>{description}</p>
                </div>
                <div className='info grid grid-cols-2'>
                    <div>
                        <BiTime size={16} className="mr-1" /><p>{date}</p>
                    </div>
                    <div>
                        <BiMap size={16} className="mr-1" /><a href={redirectMap} target="_blank">Abrir com google maps</a>
                    </div>
                </div>
                <a className='redirect' href={redirectDetail}>Ver mais</a>
            </div>
        </div>
    )
}
