import React from "react";

function Titulos(props){
    return(
      <>
        <section className='container__Productos'>
          <h1>{props.text}</h1>
        </section>
      </>
    )
  }

export default Titulos