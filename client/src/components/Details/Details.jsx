import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { delete_activity, get_detail } from "../../redux/actions";
import { Activities } from "./Activities";
import s from "./Details.module.css";

export const Details = (props) => {
  let { id } = props.match.params;

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(get_detail(id));
  }, [dispatch, id]);

  let { detail } = useSelector((state) => state);

  const handleClick = (id, name) => {
    dispatch(delete_activity(id));
    alert(`La Actividad: ${name.toUpperCase()}, fue eliminada`);
    history.push('/home');
  }

  return (
    <div className={s.div_principal}>
      {!detail.error ? (
        <div className={s.div_detail}>
          <div className={s.div_date_country} >
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
          </div>
          <div className={s.div_each_activity} >
            <h3>Actividad(es) Turística(s):</h3>
            <div className={s.div_all_activities}>
              {
                detail.activities?.map(el => {
                  return(
                    <Activities
                      key={el.id}
                      id={el.id}
                      name={el.name}
                      difficulty={el.difficulty}
                      duration={el.duration}
                      season={el.season}
                      handleClick={handleClick}
                    />
                  );
                })
              }
            </div>
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
