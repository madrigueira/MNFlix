import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Header from './components/Header'
import Banner from './components/Banner'
import Thumb from './components/Thumb'
import data from './dados.json'

const test = data.videos

const kek = test.map(item => (
    <Thumb key={item.title} bg={item.bg} title={item.title} />
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Header />
      <Banner />
      {kek}
  </React.StrictMode>
)