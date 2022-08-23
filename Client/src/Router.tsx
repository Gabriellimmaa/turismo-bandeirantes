import { Routes, Route } from 'react-router-dom'
import Historia from './screens/Historia'
import { Hoteis } from './screens/Hoteis'
import Inicio from './screens/Inicio'
import Restaurantes from './screens/Restaurantes'
import { Turismo } from './screens/Turismo'
import { Agenda } from './screens/Agenda'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/historia" element={<Historia />} />
      <Route path="/turismo" element={<Turismo />} />
      <Route path="/restaurantes" element={<Restaurantes />} />
      <Route path="/hospedagem" element={<Hoteis />} />
      <Route path="/agenda" element={<Agenda />} />
    </Routes>
  )
}
