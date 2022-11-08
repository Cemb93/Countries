import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { search_country } from '../../redux/actions';
import s from './Search.module.css';

export const SearchCountry = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const handle_submit = (e) => {
    e.preventDefault();
    dispatch(search_country(name));
    setName("");
  };

  const handle_input_change = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <div className={s.div_principal} >
      <form onSubmit={(e) => handle_submit(e)} >
        <div>
          <input 
            type="text"
            value={name}
            placeholder='Search country...'
            onChange={(e) => handle_input_change(e)}
            className={s.input}
          />
          <button type='submit' className={s.btn} >Buscar</button>
        </div>
      </form>
    </div>
  );
}