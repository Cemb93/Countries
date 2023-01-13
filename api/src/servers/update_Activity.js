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

// const update_activity = async (req, res) => {
//   const { id } = req.params;
//   const { name, duration, difficulty, season, nameCountry } = req.body;
//   try {
//     if (
//       !name ||
//       name === '' ||
//       (!difficulty && isNaN(difficulty) == true) ||
//       (!duration && isNaN(duration) == true) ||
//       (
//         season !== 'Verano' &&
//         season !== 'Otoño' &&
//         season !== 'Invierno' &&
//         season !== 'Primavera' ||
//         nameCountry.length === 0
//       )
//     ) {
//       return res.status(404).json('la actividad no se ah modificado');
//     } else {
//       const current = await Activity.update(
//         { name, duration, difficulty, season },
//         {
//           where: { id, },
//         }
//       );
//       console.log('CURRENT:', current);
//       return res.json(current)
//     }
//   } catch (error) {
//     return res.json({ error: error.message });
//   }
// };
// module.exports = { update_activity }