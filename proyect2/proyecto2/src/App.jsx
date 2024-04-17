import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MiPrimerEstado } from './componentes/MiPrimerEstado'
import { EjercicioComponente } from './componentes/EjercicioComponente'

function App() {
  const [count, setCount] = useState(0)

  const  fecha = new Date();
  const yearActual = fecha.getFullYear(); 

  return (
    <>
      <div className="Logos">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <h1> El Estado de React - HookeState</h1>

      <MiPrimerEstado/>

      <br />
      <EjercicioComponente year={yearActual} />

      
    </>
  )
}

export default App
