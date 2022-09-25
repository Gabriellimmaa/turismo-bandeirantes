import Header from './components/Header'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Footer } from './components/Footer'
import './i18next'
import { toast, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

import { usePosition } from './hooks/usePosition'
import ScrollToTop from './hooks/scrollToTop'

function CalculoKm(latitude2: string, longitude2: string) {
  const { position } = usePosition()

  const p1 = Math.cos((90 - Number(position.latitude)) * (Math.PI / 180))
  // Inicio dos calculos 2° parte
  const p2 = Math.cos((90 - Number(latitude2)) * (Math.PI / 180))
  // Inicio dos calculos 3° parte
  const p3 = Math.sin((90 - Number(position.latitude)) * (Math.PI / 180))
  // Inicio dos calculos 4° parte
  const p4 = Math.sin((90 - Number(latitude2)) * (Math.PI / 180))
  // Inicio dos calculos 5° parte
  const p5 = Math.cos(
    (Number(position.longitude) - Number(longitude2)) * (Math.PI / 180),
  )

  const KM = Math.acos(p1 * p2 + p3 * p4 * p5) * 6371 * 1.15

  if (KM < 746) {
    toast.success(
      'Você está muito perto de um estabelecimento, que tal ir lá dar uma olhada?',
    )
  }

  return console.log(KM)
}

function App() {
  const hoteis = [
    {
      id: 1,
      nome: 'Hotel 1',
      latitude: '-22.9035',
      longitude: '-43.2096',
    },
  ]

  function retornaDistancia() {
    hoteis?.map((hotel) => CalculoKm(hotel.latitude, hotel.longitude))
  }

  retornaDistancia()
  usePosition()

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ToastContainer />
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  )
}

export default App
