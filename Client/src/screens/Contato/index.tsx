import React from 'react'
import './styles.css'

export default function Contato() {
    return (
        <div className='contato'>
            <div className='endereço'>
            <h1>Endereço</h1>
            <iframe className='mapa'
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAEM-BKN-O6irIoDU8C-G9OFtPUvgb6bjg&q=-23°06'22.9, -50°22'18.7">
            </iframe>
            </div>
            <div className='telefone'>
                
            </div>
        </div>
    )
}