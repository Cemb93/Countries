import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  filter_BY_activities,
  filter_BY_continents,
  get_all_countries,
  order_BY_name,
  order_BY_population,
} from "../../redux/actions";
import { CardCountry } from "../Card_Country/CardCountry";
import { FilterOrder } from "../Filter_Order/FilterOrder";
import { Paginado } from "./Paginado.js";
import { Loading } from "../Loading/Loading";
import s from "./Home.module.css";

export const Home = () => {
  const dispatch = useDispatch();
  let all_countries = useSelector((state) => state.all_countries);

  //! ----- PAGINADO -----
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(9);
  const index_last_country = currentPage * countriesPerPage; //* 9
  const index_first_country = index_last_country - countriesPerPage; //* 0
  //! ----- PAGINADO -----
  const current_countries =
    !all_countries.error &&
    all_countries.slice(index_first_country, index_last_country);

  const [, setOrder] = useState("");
  useEffect(() => {
    dispatch(get_all_countries());
  }, [dispatch]);

  const handle_click = (e) => {
    e.preventDefault();
    dispatch(get_all_countries());
  };

  const handle_filter_continents = (e) => {
    //* FUNCIONA
    e.preventDefault();
    dispatch(filter_BY_continents(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  };

  const handle_filter_activities = (e) => {
    //* FUNCIONA
    e.preventDefault();
    dispatch(filter_BY_activities(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  };

  const handle_order_name = (e) => {
    //* FUNCIONA
    e.preventDefault();
    dispatch(order_BY_name(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  };

  const handle_order_population = (e) => {
    //* FUNCIONA
    e.preventDefault();
    dispatch(order_BY_population(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  };

  return (
    <div className={s.div_princial}>
      <h1>PI - COUNTRIES</h1>
      <Link to={"/create-activity"}>
        <button className={s.btn_Link}>Crea una Actividad</button>
      </Link>
      <Link to={"/activities"}>
        <button className={s.btn_Link}>Ver todas las actividades</button>
      </Link>
      <br />
      <button onClick={(e) => handle_click(e)} className={s.btn_click}>
        GET ALL COUNTRIES
      </button>
      <br />
      <br />
      <div>
        <FilterOrder
          handle_filter_continents={handle_filter_continents}
          handle_filter_activities={handle_filter_activities}
          handle_order_name={handle_order_name}
          handle_order_population={handle_order_population}
        />
      </div>
      <br />
      <div>
        <Paginado
          all_countries={all_countries}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setCountriesPerPage={setCountriesPerPage}
        />
      </div>
      <br />
      <div className={s.div_cards}>
        {all_countries.error ? (
          <h1 className={s.h2_msg_errors}>{all_countries.error}</h1>
        ) : (
          <>
            {!current_countries.length ? (
              <Loading />
            ) : (
              current_countries?.map((el) => {
                return (
                  <CardCountry
                    key={el.id}
                    id={el.id}
                    name={el.name}
                    flags={el.flags}
                    continents={el.continents}
                    population={el.population}
                    activities={el.activities}
                  />
                );
              })
            )}
          </>
        )}
      </div>
    </div>
  );
};
