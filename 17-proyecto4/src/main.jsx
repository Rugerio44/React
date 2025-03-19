import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//Importar recusros (hoja de estilos, imagenes,fuentes)
import './assets/css/normalize.css';
import './assets/fonts/fontawesome-free-6.1.2-web/css/all.css';
import './assets/css/styles.css';
import './assets/css/responsive.css';

createRoot(document.getElementById('root')).render(
    <App /> 
)
