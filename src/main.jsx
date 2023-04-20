import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Header from './components/Header'
import Banner from './components/Banner'
import Slider from './components/Slider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Header />
      <Banner />
      <Slider />
  </React.StrictMode>
)