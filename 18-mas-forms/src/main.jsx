import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Miformulario } from './components/Miformulario.jsx'

createRoot(document.getElementById('root')).render(
    <Miformulario />
)
