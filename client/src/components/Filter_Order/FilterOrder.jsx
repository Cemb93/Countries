import React from "react";
import { useSelector } from "react-redux";
import { f_o } from "../../redux/actions_types";
import { SearchCountry } from "../Search_Country/SearchCountry";
import s from "./FilterOrder.module.css";

export const FilterOrder = ({
  handle_filter_continents,
  handle_filter_activities,
  handle_order_name,
  handle_order_population,
}) => {
  let { copy_all_countries, all_continents, all_activities } = useSelector(state => state);

  let Continentes = []; //TODO: Aca guardo TODOS los Continentes SIN REPETIR

  let Actividades = []; //TODO: Aca guardo TODAS las Actividades SIN REPETIR

  //TODO:============================================================
  for (let element of copy_all_countries) {
    for (let C of all_continents) {
      if (element.continents === C) {
        Continentes.push(C);
      }
    }
    for (let A of all_activities) {
      for (let el of element.activities) {
        if (el.name === A) {
          Actividades.push(A);
        }
      }
    }
  }
  Continentes = [...new Set(Continentes)];
  Actividades = [...new Set(Actividades)];

  return (
    <div className={s.div_principal}>
      <SearchCountry />
      <select
        onChange={(e) => handle_filter_continents(e)}
        className={s.select}
      >
        <option value={`${f_o.ALL}`}>All Continents</option>
        {Continentes?.map((el) => {
          return <option>{el}</option>;
        })}
      </select>
      <select
        onChange={(e) => handle_filter_activities(e)}
        className={s.select}
      >
        <option value={`${f_o.ALL}`}>All Activities</option>
        {Actividades?.map((el) => {
          return <option>{el}</option>;
        })}
      </select>
      <select onChange={(e) => handle_order_name(e)} className={s.select}>
        <option>Order Name</option>
        <option value={`${f_o.ASCENDENTE}`}>A - Z</option>
        <option value={`${f_o.DESCENDENTE}`}>Z - A</option>
      </select>
      <select onChange={(e) => handle_order_population(e)} className={s.select}>
        <option>All Population</option>
        <option value={f_o.Mayor_Poblacion}>Mayor_Poblacion</option>
        <option value={f_o.Menor_Poblacion}>Menor_Poblacion</option>
      </select>
    </div>
  );
};
