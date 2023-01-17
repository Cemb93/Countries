import axios from "axios";
import { ActionTypes, Url_Back } from "./actions_types";

export const get_all_countries = () => async (dispatch) => {
  try {
    let res = await axios(Url_Back.URL_COUNTRIES);
    dispatch({
      type: ActionTypes.GET_ALL_COUNTRIES,
      payload: res.data,
    });
  } catch (error) {
    console.log(`Error en ACTIONS ALL-COUNTRIES por: (${error})`);
  }
};

export const search_country = (name) => async (dispatch) => {
  try {
    let res = await axios(`${Url_Back.URL_COUNTRIES}?name=${name}`);
    dispatch({
      type: ActionTypes.SEARCH_COUNTRY,
      payload: res.data,
    });
  } catch (error) {
    console.log(`Error en ACTIONS SEARCH por: (${error})`);
  }
};

export const filter_BY_continents = (value) => {
  return {
    type: ActionTypes.FILTER_BY_CONTINENTS,
    payload: value,
  };
};

export const filter_BY_activities = (value) => {
  return {
    type: ActionTypes.FILTER_BY_ACTIVITIES,
    payload: value,
  };
};

export const order_BY_name = (value) => {
  return {
    type: ActionTypes.ORDER_BY_NAME,
    payload: value,
  };
};

export const order_BY_population = (value) => {
  return {
    type: ActionTypes.ORDER_BY_POPULATION,
    payload: value,
  };
};

export const get_detail = (id) => async (dispatch) => {
  try {
    let res = await axios(`${Url_Back.URL_COUNTRIES}/${id}`);
    dispatch({
      type: ActionTypes.GET_DETAIL,
      payload: res.data,
    });
  } catch (error) {
    console.log(`Error DETAIL ACTIONS por: (${error})`);
  }
};

export const create_activity = (post) => async (dispatch) => {
  try {
    let res = await axios.post(`${Url_Back.URL_ACTIVITIES}`, post);
    dispatch({
      type: ActionTypes.CREATE_ACTIVITY,
      payload: res.data,
    });
  } catch (error) {
    console.log(`Error Action Post por: (${error})`);
  }
};

export const get_all_activities = () => async (dispatch) => {
  try {
    let res = await axios(Url_Back.URL_ACTIVITIES);
    dispatch({
      type: ActionTypes.GET_ALL_ACTIVITIES,
      payload: res.data,
    });
  } catch (error) {
    console.log(`Error GET ACTIVITIES por: (${error})`);
  }
};

export const delete_activity = (id) => async (dispatch) => {
  try {
    await axios.delete(`${Url_Back.URL_ACTIVITIES}/${id}`);
    return dispatch({
      type: ActionTypes.DELETE_ACTIVITY,
      payload: id,
    });
  } catch (error) {
    console.log('Error en action delete por:', error);
  }
};

export const update_activity = (activity, id) => async (dispatch) => {
  // console.log(activity, 'id:', id)
  try {
    let { data } = (await axios.put(`${Url_Back.URL_ACTIVITIES}/${id}`, activity));
    console.log(data)
    return dispatch(get_all_activities());
  } catch (error) {
    console.log('Error en action update por:', error);
  }
}