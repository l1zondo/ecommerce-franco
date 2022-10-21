import React from "react";
import Nav from "./Nav";

function Header(prop){
console.log(prop.callback) 
  
    let nombreCompleto = prop.nombre + " " + prop.apellido
    return (
    <header id="main-header">
    <h1>SoVó</h1>
    <p>bienvenido {nombreCompleto}! </p>
    <Nav/>
</header>
    )
}

export default Header