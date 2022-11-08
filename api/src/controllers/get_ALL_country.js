const axios = require('axios');
const URL_API = 'https://restcountries.com/v3/all';

const get_all_country = async () => {
  let data_API = await axios(`${URL_API}`);

  let each_country = await data_API.data.map(el => {
    let arr_capital = [];
    if (el.capital !== undefined) {
      arr_capital = el.capital.map(el => el);
    }
    return {
      id: el.cca3,
      name: el.name.common,
      flags: el.flags[1],//* IMG
      continents: el.continents[0],
      capital: arr_capital,
      subregion: el.subregion,
      area: el.area,
      population: el.population,
    }
  });

  return each_country; 
}

module.exports = { get_all_country }