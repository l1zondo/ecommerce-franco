import React from "react";
import Navbar from "../Header/Navbar";
import CartWidget from "../Header/CartWidget";


function Header(prop){
console.log(prop.callback) 
  
    let nombreCompleto = prop.nombre + " " + prop.apellido
    return (
    <header id="main-header">
    <h1>SoVó</h1>
    <p>bienvenido {nombreCompleto}! </p>
    <Navbar/>
    <CartWidget/>
</header>

    )
}

export default Header