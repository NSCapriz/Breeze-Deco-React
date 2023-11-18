import React from "react";
import { useState } from "react";
import logo from '../assets/logo.jpg';
import menuHamburguesa from '../assets/menu-hamburguesa.png'

function Navbar() {
  const [menu, setMenu]= useState(false);
  const toggleMenu = () => {
    setMenu(!menu )
  }
    return (
      <>
        <header>
          <nav className='container__Navbar'>
            <div className='container__Navbar--logo'>
              <a href="#"><img src={logo} alt="Logo Breeze Deco" /></a>
              <p>Breeze Deco</p>
            </div>
            <div className={`container__Navbar--links ${menu ? 'open' : ''}`}>
              <button onClick={toggleMenu}><img src={menuHamburguesa} alt="" /></button>
              <ul className={`nav-links ${menu ? 'show' : ''}`}>
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