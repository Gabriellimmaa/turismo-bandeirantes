import React from 'react'
import { Footer } from '../../components/Footer'
import Header from '../../components/Header'

export default function Inicio() {
  return (
    <>

      {/* Renderizando componente Header */}
      <Header />

      <div className="h-96">
        <h1>Inicio</h1>
        <p>src\screens\Inicio\index.tsx</p>
      </div>
      
      <Footer />
    </>
  )
}
