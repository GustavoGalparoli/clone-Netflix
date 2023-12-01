import React from 'react'
import Boton from '../Boton'
import { useAuth } from '../hooks/useAuth';
import './Login.css'


const Login = () => {
  const {  login } = useAuth();

  function iniciarSesion(e) {
    e.preventDefault();
    console.log("inicio la sesion");
    login()
  
  }
  return <>
   
    <img src='./ironflix.png'></img>
    <div className="container">
    <h1>login</h1>
    <label htmlFor="username">Usuario:</label>
    <input className='email' type='email' id='email' name="username"></input><br></br>

    <label className='pass' name='pass' htmlFor="pass">Contraseña:</label>
    <input className='pass' type='password' id='password' name="pass"></input>
    <br></br>
    <br></br>
    <Boton click={iniciarSesion}>iniciar sesion</Boton>
    </div>
  </>
}

export default Login