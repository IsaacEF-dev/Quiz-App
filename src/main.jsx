import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { RouterApp } from './QuizApp/Routers/RouterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  </React.StrictMode>
)
