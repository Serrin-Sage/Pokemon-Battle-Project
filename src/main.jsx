import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './stylesheets/store-style.css'
import './stylesheets/team-style.css'
import './stylesheets/battle-style.css'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
