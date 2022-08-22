import { Routes, Route } from 'react-router-dom'
import Historia from './screens/Historia'
import Inicio from './screens/Inicio'
import Restaurantes from './screens/Restaurantes'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/historia" element={<Historia />} />
      <Route path="/restaurantes" element={<Restaurantes />} />
    </Routes>
  )
}
