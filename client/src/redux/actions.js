import axios from 'axios';
const URL_COUNTRIES = 'http://localhost:3001/countries';
const URL_ACTIVITIES = 'http://localhost:3001/activities';

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const get_all_countries = () => async (dispatch) => {
  try {
    let res = await axios(URL_COUNTRIES);
    dispatch({
      type: GET_ALL_COUNTRIES,
      payload: res.data,
    });
  } catch (error) {
    console.log(`Error en ACTIONS ALL-COUNTRIES por: (${error})`);
  }
}

export const SEARCH_COUNTRY = 'SEARCH_COUNTRY';
export const search_country = (name) => async (dispatch) => {
  try {
    let res = await axios(`${URL_COUNTRIES}?name=${name}`);
    dispatch({
      type: SEARCH_COUNTRY,
      payload: res.data,
    });
  } catch (error) {
    console.log(`Error en ACTIONS SEARCH por: (${error})`);
  }
}

export const FILTER_BY_CONTINENTS = 'FILTER_BY_CONTINENTS';
export const filter_BY_continents = (value) => {
  return {
    type: FILTER_BY_CONTINENTS,
    payload: value,
  }
}

export const FILTER_BY_ACTIVITIES = 'FILTER_BY_ACTIVITIES';
export const filter_BY_activities = (value) => {
  return {
    type: FILTER_BY_ACTIVITIES,
    payload: value,
  }
}

export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const order_BY_name = (value) => {
  return {
    type: ORDER_BY_NAME,
    payload: value,
  }
}

export const ORDER_BY_POPULATION = 'ORDER_BY_POPULATION';
export const order_BY_population = (value) => {
  return {
    type: ORDER_BY_POPULATION,
    payload: value,
  }
}

export const GET_DETAIL = 'GET_DETAIL';
export const get_detail = (id) => async (dispatch) => {
  try {
    let res = await axios(`${URL_COUNTRIES}/${id}`);
    dispatch({
      type:GET_DETAIL,
      payload: res.data,
    });
  } catch (error) {
    console.log(`Error DETAIL ACTIONS por: (${error})`);
  }
}

export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const create_activity = (post) => async (dispatch) => {
  try {
    let res = await axios.post(`${URL_ACTIVITIES}`, post);
    console.log('POST:', res.data)
    dispatch({
      type: CREATE_ACTIVITY,
      payload: res.data,
    });
  } catch (error) {
    console.log(`Error Action Post por: (${error})`);
  }
}

export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES';
export const get_all_activities = () => async (dispatch) => {
  try {
    let res = await axios(URL_ACTIVITIES);
    dispatch({
      type: GET_ALL_ACTIVITIES,
      payload: res.data,
    });
  } catch (error) {
    console.log(`Error GET ACTIVITIES por: (${error})`);
  }
}
