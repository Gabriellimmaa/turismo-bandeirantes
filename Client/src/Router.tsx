import { Routes, Route } from 'react-router-dom'
import Historia from './screens/Historia'
import Inicio from './screens/Inicio'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/historia" element={<Historia />} />
    </Routes>
  )
}
