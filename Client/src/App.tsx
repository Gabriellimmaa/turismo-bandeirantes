import Header from './components/Header'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Footer } from './components/Footer'
import './i18next';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  )
}

export default App
