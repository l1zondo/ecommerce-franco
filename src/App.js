import React from "react";
import Header from "./Header";
import Main from "./Main"
import Footer from "./Footer";

function App(){

    const handleClick = () => {
        console.log("click")
    }
    return (
        <>
        <Header
        nombre="horacio"
        apellido="lopez"
        callback={handleClick}/>

        <Main/>
        <Footer/>
        </>
    )
  }
  export default App 
