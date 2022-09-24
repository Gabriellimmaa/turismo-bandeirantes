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
import ScrollToTop from './hooks/scrollToTop'
import { useEffect, useState } from 'react'
import OneSignal from 'react-onesignal'

function App() {
  usePosition()

  useEffect(() => {
    OneSignal.init({
      appId: "95861f90-eebf-4e95-9afd-ca12ea5ace35"
    });
  }, []);

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
