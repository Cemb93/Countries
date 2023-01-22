import { ActionTypes } from "./actions_types";

export const ALL = "ALL";
export const ASCENDENTE = "ASCENDENTE";
export const DESCENDENTE = "DESCENDENTE";
export const Mayor_Poblacion = "Mayor_Poblacion";
export const Menor_Poblacion = "Menor_Poblacion";

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
      //! Aca SOLO obtengo los Nombres de los Continentes y poder comparar en el Filtro
      let each_continent =
        action.payload === ALL
          ? action.payload
          : action.payload.reduce((acc, el) => {
              //* Si NO HAY nada en el "acc" se agrega
              if (!acc.find((c) => c === el.continents)) {
                acc.push(el.continents);
              }
              return acc;
            }, []);
      // console.log('CADA C - REDUCER:', each_continent)
      //! Aca obtengo SOLO los Nombres de las Actividades y poder comparar en el filtro
      let each_activity =
        action.payload === ALL
          ? action.payload
          : action.payload.reduce((acc, el) => {
              for (let prop in el) {
                if (el[prop] === el["activities"]) {
                  for (let index of el[prop]) {
                    if (index.name) {
                      acc.push(index.name);
                    }
                  }
                }
              }
              return acc;
            }, []);
      // console.log('CADA A - REDUCER:', each_activity)
      return {
        ...state,
        all_countries: action.payload,
        copy_all_countries: action.payload,
        all_continents: each_continent,//* Aca se vera visualizado la lista de Continentes para el filtro
        all_activities: each_activity,//* Aca se vera visualizado la lista de Actividades para el filtro
      };
    case ActionTypes.SEARCH_COUNTRY:
      return {
        ...state,
        all_countries: action.payload,
      };
    case ActionTypes.FILTER_BY_CONTINENTS: //* FUNCIONA
      let Continentes = state.copy_all_countries;
      let filter_Continents = 
        action.payload === ALL
          ? Continentes
          : Continentes.filter(el => el.continents === action.payload);
      // console.log('DESPUES DEL FILTRO C:', filter_Continents)
      return {
        ...state,
        all_countries: filter_Continents,//* Aca me genera el cambio que necesito en el filtro de Continentes
      };
    case ActionTypes.FILTER_BY_ACTIVITIES: //* FUNCIONA
      let Actividades = state.copy_all_countries;
      let filter_Activities = [];
      for (let el of Actividades) {
        for (let actividad of el.activities) {
          if (actividad.name === action.payload) {
            filter_Activities.push(el);//* Aca agrego cada ELEMENTO que tiene Actividades
          }
        }
      }
      filter_Activities = action.payload === ALL ? Actividades : filter_Activities;
      // console.log('DESPUES DEL FILTRO A:', filter_Activities)
      return {
        ...state,
        all_countries: filter_Activities,//* Aca me genera el cambio que necesito en el filtro de Actividades
      };
    case ActionTypes.ORDER_BY_NAME: //* FUNCIONA
      let all_name = state.copy_all_countries;
      let order_name =
        action.payload === ASCENDENTE
          ? all_name.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
              return 0;
            })
          : all_name.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
              if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
              return 0;
            });
      // console.log('ORDER NAME REDUCER:', order_name)
      return {
        ...state,
        all_countries: order_name,
      };
    case ActionTypes.ORDER_BY_POPULATION: //* FUNCIONA
      let order_population = state.copy_all_countries;
      order_population = order_population.sort((a, b) => {
        if (action.payload === Mayor_Poblacion)
          return b.population - a.population;
        return a.population - b.population;
      });
      // console.log('ORDER POB REDUCER:', order_population)
      return {
        ...state,
        all_countries: order_population,
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
