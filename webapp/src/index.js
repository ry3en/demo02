import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Alumno from "./componentes/Usuario";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const [sesion, cambiarSesion] = useState(true);
  const [contador, setContador] = useState(0);

  return (
    <>
      {sesion === true ? (
        <>
          <h1>contador {contador}</h1>
          <Alumno />
          <button onClick={() => cambiarSesion(false)}>Cerrar sesion</button>
          <button onClick={() => setContador(contador+1)}>Sumar</button>
          <button onClick={() => setContador(contador-1)}>restar</button>
          <button onClick={() => setContador(contador*2)}>Mul 2</button>
        </>
      ) : (
        <>
          <h2>No has iniciado sesión</h2>
          <button onClick={() => cambiarSesion(true)}>Iniciar sesion</button>
        </>
      )}
    </>
  );
};

root.render(<App />);