import React from "react";
import s from "./Edit.module.css";

export const FormEdit = ({
  Handle_Change,
  Handle_Submit,
  list_Countries,
  errors,
  Select_Countries,
  activity,
}) => {
  return (
    <div className={s.div_principal}>
      <form onSubmit={(e) => Handle_Submit(e)}>
        <div className={s.div_form}>
          <div className={s.div_label}>
            <label>*Nombre Actividad: </label>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Ej: Natación"
                onChange={(e) => Handle_Change(e)}
                className={s.div_input}
              />
            </div>
          </div>
          <div className={s.div_errors}>
            {!activity.name && (
              <span>
                <strong>{errors.name}</strong>
              </span>
            )}
          </div>

          <div className={s.div_label}>
            <label>Like: </label>
            <div>
              <input
                type="number"
                name="like"
                placeholder="Ej: Cambio - PI"
                onChange={(e) => Handle_Change(e)}
                className={s.div_input}
              />
            </div>
          </div>

          <div className={s.div_label}>
            <label>*Dificultad: </label>
            <div>
              <select
                name="difficulty"
                onChange={(e) => Handle_Change(e)}
                className={s.div_select}
              >
                <option>Dificultad</option>
                <option value="1">1 - Muy Fácil</option>
                <option value="2">2 - Fácil</option>
                <option value="3">3 - Medio</option>
                <option value="4">4 - Difícil</option>
                <option value="5">5 - Muy Difícil</option>
              </select>
            </div>
          </div>
          <div className={s.div_errors}>
            {errors.name && !activity.difficulty && (
              <span>
                <strong>{errors.difficulty}</strong>
              </span>
            )}
          </div>

          <div className={s.div_label}>
            <label>*Duración: </label>
            <div>
              <select
                name="duration"
                onChange={(e) => Handle_Change(e)}
                className={s.div_select}
              >
                <option>Duración</option>
                <option value={1}>1 Hora</option>
                <option value={2}>2 Horas</option>
                <option value={3}>3 Horas</option>
                <option value={4}>4 Horas</option>
                <option value={5}>5 Horas</option>
              </select>
            </div>
          </div>
          <div className={s.div_errors}>
            {errors.name && errors.difficulty && (
              <span>
                <strong>{errors.duration}</strong>
              </span>
            )}
          </div>

          <div className={s.div_label}>
            <label>*Temporada: </label>
            <div>
              <select
                name="season"
                onChange={(e) => Handle_Change(e)}
                className={s.div_select}
              >
                <option>Temporada</option>
                <option value="Verano">Verano</option>
                <option value="Otoño">Otoño</option>
                <option value="Invierno">Invierno</option>
                <option value="Primavera">Primavera</option>
              </select>
            </div>
          </div>
          <div className={s.div_errors}>
            {errors.name && errors.difficulty && errors.duration && (
              <span>
                <strong>{errors.season}</strong>
              </span>
            )}
          </div>

          <div className={s.div_label}>
            <label>País: </label>
            <div>
              <select
                name="nameCountry"
                onChange={(e) => Select_Countries(e)}
                className={s.div_select}
              >
                <option>
                  Elige de que País quieres que sea tu Actividad
                </option>
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
          </div>
          <br />
          {/* <div className={s.div_text}>
            {activity.name &&
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
                Editar Actividad
              </button>
            ) : (
              "Llena los campos requeridos (*) y escoge al menos un País, para poder editar la Actividad"
            )}
          </div> */}
          <div onClick={Handle_Submit} >
            <button type="submit" >
              Editar Actividad
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
