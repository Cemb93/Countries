const { Activity } = require('../db');

const delete_activity = async (req, res) => {
  let { id } = req.params;

  try {
    let activity = await Activity.findByPk(id);
    activity = JSON.parse(JSON.stringify(activity));
    console.log('delete activity:', activity.name);
    if (!activity) {
      return res.status(404).json({ error: `La Actividad ${activity.name}, no existe.`});
    } else {
      await activity.destroy();
      return res.status(200).json({ msg: `La Actividad ${activity}, ha sido eliminada.`})
    }
  } catch (error) {
    // console.log('ERROR EN DELETE:', error)
    return res.json(`ERROR EN DELETE: ${error}`);
    // return res.json({ error: error });
  }
}

module.exports = { delete_activity }