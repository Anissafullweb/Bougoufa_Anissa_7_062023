import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/styles/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Housing from './pages/Housing'
import NotFound from './pages/NotFound'
import Header from './components/header/Header'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter >
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/housing/:id' element={<Housing />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)

