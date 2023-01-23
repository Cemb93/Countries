import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { delete_activity, get_all_activities } from "../../redux/actions";
import s from "./Activities.module.css";

export const All_Activities = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(get_all_activities());
  }, [dispatch]);

  let { activities } = useSelector((state) => state);

  const handleClick = (id, name) => {
    dispatch(delete_activity(id));
    dispatch(get_all_activities());
    alert(`La Actividad: ${name.toUpperCase()}, fue eliminada`);
  };

  const handleReturn = () => {
    history.push("/home");
  };

  return (
    <div className={s.container}>
      <div className={s.activities}>
        {activities?.map((el) => {
          return (
            <div>
              <div key={el.id} className={s.activity}>
                <p>
                  <b>Actividad: </b>
                  {el.name}
                </p>
                <p>
                  <b>Duración: </b>
                  {el.duration}
                </p>
                <p>
                  <b>Dificultad: </b>
                  {el.difficulty}
                </p>
                <p>
                  <b>Temporada: </b>
                  {el.season}
                </p>
                <div className={s.btns_changes} >
                  <button
                    onClick={() => handleClick(el.id, el.name)}
                    className={s.btn_delete}
                  >
                    ELIMINAR
                  </button>
                  <Link to={`/edit-activity/${el.id}`}>
                    <button className={s.btn_Link} >Editar</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={handleReturn} className={s.btn_return}>
        Regresar
      </button>
    </div>
  );
};
