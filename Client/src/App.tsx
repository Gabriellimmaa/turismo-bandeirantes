import Header from './components/Header'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Footer } from './components/Footer'
import './i18next'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import ScrollToTop from './hooks/scrollToTop'

function App() {
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
