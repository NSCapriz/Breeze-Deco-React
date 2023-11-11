import React, { useState } from "react";

import difusor from '../assets/difusor.jpg'


function Producto(props){
  const [mostrarContenido, setMostrarContenido] = useState(false);
  const toggleContenido = () => {
    setMostrarContenido(!mostrarContenido);
  };
    return(
      <>
      <div className="container_producto">
            <img src={difusor} alt="" />
            <button type="button" onClick={toggleContenido}>Ver detalles</button>
      </div>
      <div id="contenido" className={mostrarContenido ? 'mostrar' : 'oculto'}>
        <p><span className="negrita">Detalles del producto:</span></p>
          <p><span>Nombre: </span>{props.nombre}</p>
          <p><span>Descripción:</span> {props.descripcion}</p>
          <p><span>Precio:</span> {props.precio}</p>
          <p><span>SKU:</span> {props.sku}</p>
          <p><span>Cantidad:</span> {props.cantidad}</p>
        </div>
      </>
    )
  }

export default Producto