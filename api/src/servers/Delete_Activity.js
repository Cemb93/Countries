const { Activity } = require('../db');

const delete_activity = async (req, res) => {
  let { id } = req.params;

  try {
    let activity = await Activity.findByPk(id);
    if (!activity) {
      throw Error(`La Actividad: ${id}, no existe.`);
    } else {
      await activity.destroy();
      return res.status(200).json({ msg: `La Actividad: ${activity.name}, ha sido eliminada.`})
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
  }
}

module.exports = { delete_activity }