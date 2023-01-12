import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { get_detail, update_activity } from "../../redux/actions";

const EditActivity = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const { detail } = useSelector((state) => state);
  useEffect(() => {
    dispatch(get_detail(id));
  }, []);
  const [activity, setActivity] = useState({
    name: "",
    like: 0,
    difficulty: "",
    duration: "",
    season: "",
    nameCountry: [],
  });

  // const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });

    // setErrors(
    //   validate({
    //     ...activity,
    //     [e.target.name]: e.target.value,
    //   })
    // );
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    // if (Object.keys(errors).length) {
    //   messageError();
    // } else {
    //   e.preventDefault();
    //   dispatch(update_activity(id));
    //   message();
    //   setTimeout(() => {
    //     setInput(initialState);
    //     history.push("/home");
    //     history.go(0);
    //   }, "3000");
    // }
    dispatch(update_activity(id));
    setTimeout(() => {
      setActivity(activity);
      history.push("/home");
      history.go(0);
    }, "3000");
  };

  let All_Countries = useSelector((state) => state.copy_all_countries).sort(
    (a, b) => {
      if (a.name < b.name) return -1;
      return 0;
    }
  );

  const list_Countries = All_Countries.map((c) => (
    <option key={c.id}>{c.name}</option>
  ));

  const Select_Countries = (e) => {
    setActivity({
      ...activity,
      nameCountry: activity.nameCountry.includes(e.target.value)
        ? activity.nameCountry
        : [...activity.nameCountry, e.target.value],
    });
    //! Se SETEA para evitar ERRORES cuando se llena campos NO OBLIGATORIOS
    // setErrors(
    //   validation({
    //     ...activity,
    //     [e.target.name]: e.target.value,
    //   })
    // );
  };

  return (
    <div>
      <form onSubmit={(e) => handlerSubmit(e)}>
        <div>
          <p>Nombre de la Actividad: </p>
          <input
            type="text"
            name="name"
            placeholder="Ej: Natación"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <p>Like: </p>
          <input
            type="number"
            name="like"
            placeholder="Ej: Cambio - PI"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <p>Like: </p>
          <select name="difficulty" onChange={(e) => handleChange(e)}>
            <option>Dificultad</option>
            <option value="1">1 - Muy Fácil</option>
            <option value="2">2 - Fácil</option>
            <option value="3">3 - Medio</option>
            <option value="4">4 - Difícil</option>
            <option value="5">5 - Muy Difícil</option>
          </select>
        </div>
        <div>
          <p>*Duración: </p>
          <select name="duration" onChange={(e) => handleChange(e)}>
            <option>Duración</option>
            <option value={1}>1 Hora</option>
            <option value={2}>2 Horas</option>
            <option value={3}>3 Horas</option>
            <option value={4}>4 Horas</option>
            <option value={5}>5 Horas</option>
          </select>
        </div>
        <div>
          <p>*Temporada: </p>
          <select name="season" onChange={(e) => handleChange(e)}>
            <option>Temporada</option>
            <option value="Verano">Verano</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
            <option value="Primavera">Primavera</option>
          </select>
        </div>
        <div>
          <p>País: </p>
          <select
            name="nameCountry"
            onChange={(e) => Select_Countries(e)}
          >
            <option>Elige de que País quieres que sea tu Actividad</option>
            {list_Countries}
          </select>
          <div>
            {activity.nameCountry.map((el, index) => {
              return (
                <div key={index}>
                  <p>{el}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
            {/* {activity.name &&
            activity.difficulty &&
            activity.duration &&
            activity.season &&
            !(
              errors.name &&
              errors.difficulty &&
              errors.duration &&
              errors.season
            ) ? (
              <button type="submit" className={s.btn}>
                Crear Actividad
              </button>
            ) : (
              "Llena los campos requeridos (*) y escoge al menos un País, para poder crear la Actividad"
            )} */}
              <button type="submit" >
                Crear Actividad
              </button>
          </div>
      </form>
    </div>
  );
};
