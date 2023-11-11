import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './Components/Navbar'
import Titulos from './Components/Titulos'
import Producto from './Components/Producto'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Titulos text="Productos"/>
      <Producto nombre="Manta" descripcion="Es una manta." precio="$ 5000" sku="001354"
      cantidad="50"/>
      <Footer/>
    </>
  )
}

export default App
