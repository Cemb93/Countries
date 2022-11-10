const { get_all_country } = require('../controllers/get_ALL_country');
const { Country, Activity } = require('../db');

const get_all_info = async (req, res) => {
  const { name } = req.query;
  const country_DB = await Country.findAll({
    include: {
      model: Activity,
      attributes: ['name', 'like', 'difficulty', 'duration', 'season'],
      through: { attributes: [], },
    }
  })

  try {
    if (!country_DB.length) {
      const country_API = await get_all_country();
      await Country.bulkCreate(country_API);
      const country_DB_v2 = await Country.findAll({
        include: {
          model: Activity,
          attributes: ['name', 'like', 'difficulty', 'duration', 'season'],
          through: { attributes: [], },
        }
      });

      if (name) {
        let filter_name = country_API.filter((el) =>
          el.name.toLowerCase().includes(name.toLowerCase())
        );
        filter_name.length
          ? res.json(filter_name)
          : res.json({ error: `El País (${name}) no existe!⚠` });
      } else {
        res.json(country_DB_v2);
      }
    } else {
      if (name) {
        let filter_name = country_DB.filter((el) =>
          el.name.toLowerCase().includes(name.toLowerCase())
        );
        filter_name.length
          ? res.json(filter_name)
          : res.json({ error: `El País (${name}) no existe!⚠` });
      } else {
        res.json(country_DB);
      }
    }
  } catch (error) {
    res.send(`Error por: (${error})`);
  }
}

module.exports = { get_all_info }