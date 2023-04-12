import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/style/index.css'
import Header from './components/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	<div>
		<Header />
		<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
			<img src='https://media.licdn.com/dms/image/C4D22AQGEQ_YVFDUqzA/feedshare-shrink_800/0/1648144844761?e=2147483647&v=beta&t=6fhxAegPFaJieI8kasFDR9afyigxPVi9yM1tKDEhjao' />
		</div>
	</div>
  </React.StrictMode>
)