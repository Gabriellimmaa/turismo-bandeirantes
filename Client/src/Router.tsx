import { Routes, Route } from 'react-router-dom'
import Historia from './screens/Historia'
import { Hoteis } from './screens/Hotel'
import { Hotel } from './screens/Details/HotelDetail'
import Inicio from './screens/Inicio'
import Restaurantes from './screens/Restaurante'
import Contato from './screens/Contato'
import { Agenda } from './screens/Agenda'
import { Turismo } from './screens/Turismo'
import { TurismoDetail } from './screens/Details/TurismoDetail'
import Map from './screens/Map'
import { RestauranteDetail } from './screens/Details/RestauranteDetail'
import { Album } from './screens/Album'
import { BarDetail } from './screens/Details/BarDetail'
import Login from './screens/Dashboard/Login'
import CadastrarTurismo from './screens/Dashboard/CadastrarTurismo'
import CadastrarBares from './screens/Dashboard/CadastrarBares'
import CadastrarHoteis from './screens/Dashboard/CadastrarHoteis'
import CadastrarAlbum from './screens/Dashboard/CadastrarAlbum'
import CadastrarAgenda from './screens/Dashboard/CadastrarAgenda'
import CadastrarRestaurantes from './screens/Dashboard/CadastrarRestaurantes'
import Opcoes from './screens/Dashboard/Opcoes'
import Cadastrar from './screens/Dashboard/Cadastrar'
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/historia" element={<Historia />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/album" element={<Album />} />
      <Route path="/contato" element={<Contato />} />

      <Route path="/turismo" element={<Turismo />} />
      <Route path="/turismo/detalhe/:id" element={<TurismoDetail />} />

      <Route path="/restaurantes" element={<Restaurantes />} />
      <Route path="/restaurante/detalhe/:id" element={<RestauranteDetail />} />

      <Route path="/bar/detalhe/:id" element={<BarDetail />} />

      <Route path="/hoteis" element={<Hoteis />} />
      <Route path="/hotel/detalhe/:id" element={<Hotel />} />

      <Route path="/map" element={<Map />} />

      {/* DASHBOARD */}
      <Route path="/login" element={<Login />} />
      <Route path="/admin/opcoes" element={<Opcoes />} />

      <Route path="/admin/cadastrar" element={<Cadastrar />} />
      <Route path="/admin/cadastrar-turismo" element={<CadastrarTurismo />} />
      <Route path="/admin/cadastrar-bar" element={<CadastrarBares />} />
      <Route path="/admin/cadastrar-hotel" element={<CadastrarHoteis />} />
      <Route path="/admin/cadastrar-album" element={<CadastrarAlbum />} />
      <Route path="/admin/cadastrar-agenda" element={<CadastrarAgenda />} />
      <Route
        path="/admin/cadastrar-restaurante"
        element={<CadastrarRestaurantes />}
      />
    </Routes>
  )
}
