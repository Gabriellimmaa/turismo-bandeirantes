import Header from './components/Header'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Footer } from './components/Footer'
import './i18next'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

import { usePosition } from './hooks/usePosition'

function App() {
  usePosition()
  //  const position = usePosition()

  /*  setInterval(() => {
    console.log(position)
  }, 3000)
*/
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  )
}

export default App
