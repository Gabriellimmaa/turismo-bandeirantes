import Header from './components/Header'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Footer } from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      {/* Renderizando componente Header */}
      <Header />
      <Router />
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
