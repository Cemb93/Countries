const axios = require('axios');
const { Country, Activity } = require('../db');
const { URL_API } = process.env;

const get_all_country = async () => {
  const country_DB = await Country.findAll({
    include: {
      model: Activity,
      attributes: ['name', 'like', 'difficulty', 'duration', 'season'],
      through: { attributes: [], },
    }
  });

  if (!country_DB.length) {
    let data_API = await axios(URL_API);
  
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
        capital: arr_capital.length >= 1 && arr_capital[0],
        subregion: el.subregion,
        area: el.area,
        population: el.population,
        createdInDb: true,
      }
    });
    each_country = await Country.bulkCreate(each_country);
  
    return each_country; 
  } else {
    return country_DB;
  }
}

module.exports = { get_all_country }