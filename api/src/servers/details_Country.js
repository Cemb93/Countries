const { Country, Activity } = require('../db');

const get_ID_country = async (req, res) => {
  const { id } = req.params;

  try {
    const get_DB_info = await Country.findAll({
      where: {
        id: id.toUpperCase(),
      },
      include: {
        model: Activity,
        attributes: ["id", "name", 'like', "difficulty", "season", "duration"],
        through: {
          attributes: [],
        },
      },
    });

    let find_ID = get_DB_info.find(el => el.id === id.toUpperCase());

    if (!find_ID) return res.json({ error: `El País con el ID: > (${id}) < NO existe!` });

    res.json(find_ID);
  } catch (error) {
    res.send(`Error en el Detalle por: ${error}`);
  }
}

module.exports = { get_ID_country }