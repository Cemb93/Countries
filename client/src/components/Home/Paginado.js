import React from "react";
import s from "./Paginado.module.css";

export const Paginado = ({ all_countries, currentPage, setCurrentPage, setCountriesPerPage, }) => {
  const pagina = (page_number) => {
    setCurrentPage(page_number);
    page_number === 1 ? setCountriesPerPage(9) : setCountriesPerPage(10);
  };

  const pages_number = [];
  //*                 Redondea ^  250                 / 10 = 25 => ceil()
  for (let i = 1; i <= Math.ceil(all_countries.length / 10); i++) {
    pages_number.push(i);
  }
  return (
    <div>
      <nav className={s.nav}>
        <div className={s.div_prev} >
          {currentPage !== 1 && (
            <button onClick={() => pagina(currentPage - 1)} className={s.btn_prev} >PREV</button>
          )}
        </div>
        <ul className={s.ul}>
          {pages_number.map((number) => {
            return (
              <div key={number} >
                <button onClick={() => pagina(number)} className={s.div_number} >{number}</button>
              </div>
            );
          })}
        </ul>
        <div className={s.div_next}>
          {currentPage !== 25 && (
            <button onClick={() => pagina(currentPage + 1)} className={s.btn_next} >NEXT</button>
          )}
        </div>
      </nav>
    </div>
  );
};
