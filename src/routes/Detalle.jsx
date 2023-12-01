import React from 'react'
import { useLocation } from 'react-router-dom';
import Layout from '../layout/Layout';
import BasicCard from '../components/BasicCard';
import { useNavigate } from 'react-router-dom';

const Detalle = () => {

  const { state } = useLocation();
  let navigate = useNavigate();
  
  function buscar(palabra) {
    navigate('/buscar/' + palabra);
  }
  return <>
    <Layout buscar={(palabra) => { buscar(palabra) }}>
      <h1>{state.userData.title !== undefined ? state.userData.title : state.userData.name}</h1>
      <BasicCard key={state.userData.id} direccion={"http://image.tmdb.org/t/p/w342/" + state.userData.poster} titulo={state.userData.title !== undefined ? state.userData.title : state.userData.name} alt={`Slide ` + state.userData.id}></BasicCard>
      <h2>sinopsis</h2>
      <p>{state.userData.description !== "" ? state.userData.description : "no disponible"}</p>
    </Layout>
  </>
}

export default Detalle