import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//Importar recusros (hoja de estilos, imagenes,fuentes)
import './assets/css/normalize.css';
import './assets/fonts/fontawesome-free-6.1.2-web/css/all.css';
import './assets/css/styles.css';
import './assets/css/responsive.css';

//Cargar configuracion react time ago 
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'
import ru from 'javascript-time-ago/locale/ru'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

 
createRoot(document.getElementById('root')).render(
    <App /> 
)
