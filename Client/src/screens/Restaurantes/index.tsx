import React from 'react'
import './styles.css'

export default function Restaurantes() {
  return (
    <div id="restaurante" className='px-32 py-16'>
      <h1>
        Restaurantes
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
      <div className="grid grid-cols-3 gap-2">
        <div className="card">
          <div className="card-img">
            <img src="src\assets\img\restaurante\01.jpg" />
          </div>
          <div className="card-text">
            <label>Texto 1</label>
            <p>texto 2</p>
            <p>Localização</p>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src="src\assets\img\restaurante\01.jpg" />
          </div>
          <div className="card-text">
            <label>Texto 1</label>
            <p>texto 2</p>
            <p>Localização</p>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src="src\assets\img\restaurante\01.jpg" />
          </div>
          <div className="card-text">
            <label>Texto 1</label>
            <p>texto 2</p>
            <p>Localização</p>
          </div>
        </div>
      </div>
    </div>
  )
}
