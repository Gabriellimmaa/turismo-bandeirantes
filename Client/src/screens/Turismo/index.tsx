import React from 'react'
import { BiMap } from 'react-icons/bi'
import { BiTime } from 'react-icons/bi'
import './style.css'


export function Turismo() {
    return(
        <div className='turismo'>
            <h1>
                Turismo
            </h1>
            <div className='main-options'>
                <ul>
                    <li>Religioso</li>
                    <li>Rural</li>
                    <li>Cultural</li>
                </ul>
            </div>
            <div className='grid grid-cols-3 gap-10'>
                <div className='card'>
                    <div className='card-img'>
                        <img src="src\assets\img\turismo\01_512x342.jpg" alt="Santuário São Miguel" />
                    </div>
                    <div className='card-text'>
                        <label>Título</label>
                        <p> <BiTime/> Horário de visitação: 7:00 - 22:00</p>
                        <p>Breve descrição</p>
                        <p> <BiMap/> Localização</p>
                        <button>Saiba Mais</button>
                    </div>
                </div>
                
                <div className='card'>
                    <div className='card-img'>
                        <img src="src\assets\img\turismo\01_512x342.jpg" alt="Santuário São Miguel" />
                    </div>
                    <div className='card-text'>
                        <label>Título</label>
                        <p> <BiTime/> Horário de visitação: 7:00 - 22:00</p>
                        <p>Breve descrição</p>
                        <p> <BiMap/> Localização</p>
                        <button>Saiba Mais</button>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-img'>
                        <img src="src\assets\img\turismo\01_512x342.jpg" alt="Santuário São Miguel" />
                    </div>
                    <div className='card-text'>
                        <label>Título</label>
                        <p> <BiTime/> Horário de visitação: 7:00 - 22:00</p>
                        <p> <BiMap/> Localização</p>
                        <p>Breve descrição</p>
                        <button>Saiba Mais</button>
                    </div>
                </div>
            </div>
        </div>
    )
}