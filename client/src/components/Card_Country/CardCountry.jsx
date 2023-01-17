import React from "react";
import { Link } from "react-router-dom";
import s from "./CardCountry.module.css";

export const CardCountry = ({
  id,
  flags,
  name,
  continents,
  population,
  activities,
}) => {
  return (
    <div className={s.div_principal}>
      <h3>{name}</h3>
      <Link to={`/countries/${id}`}>
        <img src={flags} alt="Img Not Found" width={"250px"} height={"200"} />
      </Link>
      <p>
        <strong>Continente: </strong>
        {continents}
      </p>
      <p>
        <strong>Población:</strong> {population} Hab.
      </p>
      <p>
        <strong>Actividades: </strong>
        {!activities.length ? 'Sin actividad(es)' : activities?.map((el) => ` ${el.name}, `)}
      </p>
    </div>
  );
};
