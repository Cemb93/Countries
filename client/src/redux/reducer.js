import { ActionTypes, f_o } from "./actions_types";

const initial_state = {
  copy_all_countries: [],
  all_countries: [],
  detail: {},
  all_continents: [],
  all_activities: [],
  activities: [],
  removeActivity: '',
};

export const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_COUNTRIES:
      return {
        ...state,
        all_countries: action.payload,
        copy_all_countries: action.payload,
        // all_continents: each_continent,//* Aca se vera visualizado la lista de Continentes para el filtro
        // all_activities: each_activity,//* Aca se vera visualizado la lista de Actividades para el filtro
      };
    case ActionTypes.SEARCH_COUNTRY:
      return {
        ...state,
        all_countries: action.payload,
      };
    case ActionTypes.GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case ActionTypes.CREATE_ACTIVITY:
      return {
        ...state,
      };
    case ActionTypes.GET_ALL_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    case ActionTypes.DELETE_ACTIVITY:
      return {
        ...state,
        removeActivity: action.payload,
      }
    default:
      return state;
  }
};
