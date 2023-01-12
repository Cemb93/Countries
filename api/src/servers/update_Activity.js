const { Activity } = require('../db');

const update_activity = async (req, res) => {
  const { id } = req.params;
  let activity = req.body;
  try {
    let current = await Activity.findByPk(id);
    if (!current) {
      throw Error('La Actividad no existe.');
    } else {
      await Activity.update(activity, { where: { id } } );
      return res.json({ msg: `La actividad ha sido actualizada.` } );
    }
  } catch (error) {
    return res.json({ error: error.message, });
  }
}

module.exports = { update_activity }