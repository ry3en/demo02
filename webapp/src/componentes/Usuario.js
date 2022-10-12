import React from "react";
// import Titulo from "./Titulo";

const Alumno = () => {
  const alumnos = [
    ["Mauro", 12312],
    ["Andy", 123412],
    ["Linares", 123123],
  ];
  return (
    <>
      <h1>Lista de alumnos</h1>
      <ul>
        {alumnos.map((nombre, i) => {
          return (
            <li>
              {nombre.map((matricula, sIndex) => {
                return <p> {matricula} </p>;
              })}
            </li>
          );
        })}
      
      </ul>
    </>
  );
};

export default Alumno;
