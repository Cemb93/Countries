const { Country, Activity } = require('../db');

const post_activity = async (req, res) => {
  const { name, like, duration, difficulty, season, nameCountry } = req.body;

  try {
    let new_activity = await Activity.create({ name, like, difficulty, duration, season, });

    let countryDB = await Country.findAll({
      where: {
        name: nameCountry,
      },
    });

    new_activity.addCountry(countryDB);

    return res.json({ message: `La Actividad (${name}) se creo exitosamente`});
  } catch (error) {
    return res.send(`No se pudo crear la Actividad por: (${error})`);
  }
};

const get_all_activity = async (_req, res) => {
  let get_activities = await Activity.findAll({
    include: {
      model: Country,
      attributes: ['name', 'flags', 'continents', 'capital', 'subregion', 'area', 'population', 'createdInDb'],
      through: { attributes: [], },
    }
  });

  return res.json(get_activities);
}

module.exports = { post_activity, get_all_activity };
