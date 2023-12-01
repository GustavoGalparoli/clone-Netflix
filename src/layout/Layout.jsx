import React from 'react'
import Menu from '../components/Menu'

const Layout = ({children,buscar=(palabra)=>{}}) => {
  function layoutBuscar(palabra){
    console.log("layout buscar "+palabra);
    buscar(palabra);
  }
  return (
    <div>
        <header>
            <Menu menuBUscar={(palabra)=>{layoutBuscar(palabra)}}></Menu>
        </header>
        {children}
    </div>
  )
}

export default Layout