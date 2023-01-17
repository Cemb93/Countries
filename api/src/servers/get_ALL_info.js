const { get_all_country } = require('../controllers/get_ALL_country');

const get_all_info = async (req, res) => {
  const { name } = req.query;

  try {
    const country_API = await get_all_country();
    if (name) {
      let filter_name = country_API.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );
      filter_name.length
        ? res.json(filter_name)
        : res.json({ error: `El País (${name}) no existe!⚠` });
    } else {
      res.json(country_API);
    }
  } catch (error) {
    res.send(`Error por: (${error})`);
  }
}

module.exports = { get_all_info }