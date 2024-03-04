import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TWC from './Component/Twc.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' text-center items-center'>
    <App />
    {/* <TWC /> */}
    </div>
  </React.StrictMode>,
)
