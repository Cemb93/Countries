import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { f_o } from "../../redux/actions_types";
import { SearchCountry } from "../Search_Country/SearchCountry";
import s from "./FilterOrder.module.css";

export const FilterOrder = ({
  setOrders,
  filters,
  orders,
  setFilters,
}) => {
  const dispatch = useDispatch();
  const {all_countries} = useSelector(state => state)
  console.log(all_countries[0])

  return (
    <div className={s.div_principal}>
      <SearchCountry />
      <select
        onChange={(e) => {
          setFilters({
            filter: e.value,
            continent: e.target.value,
          })
        }}
        className={s.select}
        id="continent"
      >
        <option>All Continents</option>
        <option>All Continents</option>
        <option>All Continents</option>
        <option>All Continents</option>
        {/* {all_countries?.map((el, idx) => {
          return <option key={idx} >{el.continents}</option>;
        })} */}
      </select>
    </div>
  );
};
