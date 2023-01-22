import React from "react";
import s from "./Details.module.css";

export const Activities = ({ id, name, difficulty, duration, season, handleClick, }) => {
  return (
    <div className={s.div_activity}>
      <p>
        <strong>Nombre de la Actividad: </strong>
        {name}
      </p>
      <p>
        <strong>Dificultad: </strong>
        Nivel - {difficulty}
      </p>
      <p>
        <strong>Duración: </strong>
        {duration} hora(s)
      </p>
      <p>
        <strong>Temporada: </strong>
        {season}
      </p>
      <button
        className={s.btn_delete}
        onClick={() => handleClick(id, name)}
      >
        ELIMINAR ACTIVIDAD
      </button>
      {/* <Link to={`/edit-activity/${id}`}>Editar Actividad</Link> */}
    </div>
  );
};
