
import React from 'react'
import { useState } from 'react'
function HomePage() {
  //toda la logica viene acá
const[contador,setContador]=useState(0);



function sumar(){
  setContador(contador +1)
}
const restar=() => {
  setContador(contador -1)
}

    //todo el contendido de la pagina
    return(
        <>
            <h1>Welcome to the HomePage</h1>
            <p>contador {contador}</p>
            <button onClick={sumar}>sumar</button>
            <button onClick={restar}>restar</button>
        </>
    )
  
}

export default HomePage


