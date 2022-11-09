import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { get_detail } from "../../redux/actions";
import s from "./Details.module.css";

export const Details = (props) => {
  let { id } = props.match.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_detail(id));
  }, [dispatch, id]);

  let detail = useSelector((state) => state.detail);

  return (
    <div className={s.div_principal}>
      {!detail.error ? (
        <div className={s.div_detail}>
          <p>
            <strong>Código de País: </strong>
            {detail.id}
          </p>
          <p>
            <strong>País: </strong>
            {detail.name}
          </p>
          <img src={detail.flags} alt="Img Not Founf" />
          <p>
            <strong>Continente: </strong>
            {detail.continents}
          </p>
          <p>
            <strong>Capital: </strong>
            {detail.capital}
          </p>
          <p>
            <strong>Sub-Región: </strong>
            {detail.subregion}
          </p>
          <p>
            <strong>Área: </strong>
            {detail.area} km2
          </p>
          <p>
            <strong>Población: </strong>
            {detail.population} Hab.
          </p>
          <h3>Actividad(es) Turística(s):</h3>
          <div className={s.div_all_activities}>
            {detail.activities?.map((el) => {
              return (
                <div className={s.div_activity}>
                  <p>
                    <strong>Nombre de la Actividad: </strong>
                    {el.name}
                  </p>
                  <p>
                    <strong>Dificultad: </strong>
                    Nivel - {el.difficulty}
                  </p>
                  <p>
                    <strong>Duración: </strong>
                    {el.duration} hora(s)
                  </p>
                  <p>
                    <strong>Temporada: </strong>
                    {el.season}
                  </p>
                </div>
              );
            })}
          </div>
          <Link to={"/home"}>
            <button className={s.btn}>Regresar</button>
          </Link>
        </div>
      ) : (
        <h1 className={s.h1_errors}>{detail.error}</h1>
      )}
    </div>
  );
};
