import React from "react";
import logo from '../assets/logo.jpg'

function Navbar() {
    return (
      <>
        <header>
          <nav className='container__Navbar'>
            <div className='container__Navbar--logo'>
              <a href="#"><img src={logo} alt="Logo Breeze Deco" /></a>
              <p>Breeze Deco</p>
            </div>
            <div className='container__Navbar--links'>
              <ul>
                <a href="#"><li>Inicio</li></a>
                <a href="#"><li>Nosotros</li></a>
                <a href="#"><li>Productos</li></a>
                <a href="#"><li>Contacto</li></a>
              </ul>
            </div>
          </nav>
        </header>
      </>
    )
  }

export default Navbar