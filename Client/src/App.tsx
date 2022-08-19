import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
