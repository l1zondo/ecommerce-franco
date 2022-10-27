import React from "react";
import Main from "./components/Main/Main";
import Header from "./components/Main/ItemListContainer";
import Footer from "./components/Footer/Footer";

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
