import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Header from './components/Header'
import Banner from './components/Banner'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Banner bg="https://i.ytimg.com/vi/oAMVSi_pkwc/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-DoACuAiKAgwIABABGFkgQyhlMA8=&rs=AOn4CLBq6MvbIDo3HuYPxiPh2USEIBOf0w"/>
  </React.StrictMode>
)