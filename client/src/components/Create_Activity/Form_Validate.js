export const validation = (activity) => {
  let errors = {};

  if (!activity.name) {
    errors.name = "Te faltó poner el Nombre!🤨";
  }

  if (!activity.difficulty) {
    errors.difficulty = "No te olvides de elegir la Dificultad!🤨";
  }

  if (!activity.duration) {
    errors.duration = "Debes agregar un tiempo de Duración para la Actividad!🤨";
  }

  if (!activity.season) {
    errors.season = "Debes escoger un Temporada para tu Actividad!🤨";
  }
  
  return errors;
};
