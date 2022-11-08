import React from 'react';
import { Link } from 'react-router-dom';
import s from './Landing.module.css';

export const LandingPages = () => {
  return (
    <div className={s.container} >
      <h2 className={s.h2} >BIENVENIDOS</h2>
      <Link to={'/home'} >
        <button className={s.button} >INGRESAR</button>
      </Link>
    </div>
  );
}