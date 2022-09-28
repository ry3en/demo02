import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const name = 'Mauro'
const last_name = 'Hernandez'
const sesion = true
const alumnos = ["Andrea", "Mauro", "Rafa"]

const jsx = (
  <> 
    {sesion === true? (
    <>
    <h1 style={{color:'green', textAlign: "center"}}> Hola {name}</h1>
    <h2 style={{color:'green', textAlign: "center"}}> Tu apellido es {last_name}</h2>
    <h3 style={{textAlign: "center"}}> Lista de alumnos </h3>
    <ul style={{textAlign: "center"}}>
      {alumnos.map((name, i) => {
        return <li key={i} style={{textAlign: "center"}}>{name}</li>
      } )}
      
    </ul>
    </>) 
    :
     (
     <h2 style={{color:'red', textAlign: "center"}}> No has iniciado sesion</h2>
     )}
 </>
);

root.render(jsx);
/* const compruebaSesion = (sesion) => {
  if(sesion === true){
    return jsx
  }
  else{
    return <h2 style={{color:'red', textAlign: "center"}}> No has iniciado sesion</h2>
  }
}

root.render(compruebaSesion(sesion)) */