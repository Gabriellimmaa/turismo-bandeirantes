import { Routes, Route } from 'react-router-dom'
import Historia from './screens/Historia'
import { Hoteis } from './screens/ListHoteis'
import Inicio from './screens/Inicio'
import Restaurantes from './screens/Restaurantes'
import { Turismo } from './screens/Turismo'
import { Agenda } from './screens/Agenda'
import Contato from './screens/Contato'
import { Hotel } from './screens/Hotel'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/historia" element={<Historia />} />
      <Route path="/turismo" element={<Turismo />} />
      <Route path="/restaurantes" element={<Restaurantes />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/hoteis" element={<Hoteis />} />
      <Route path="/hotel/:id" element={<Hotel />} />
    </Routes>
  )
}
