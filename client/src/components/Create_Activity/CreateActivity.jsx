import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create_activity, get_all_countries } from "../../redux/actions";
import { validation } from "./Form_Validate";
import { FormCreate } from "./FormCreate";
import { useHistory } from "react-router-dom";

export const CreateActivity = () => {
  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    nameCountry: [],
  });

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const history = useHistory();

  //* Invoco la "Action" para poder visualizar los "Paises"
  useEffect(() => {
    dispatch(get_all_countries());
  }, [dispatch]);

  //! Se evaluan los campos OBLIGATORIOS en caso de ERRORES
  const Handle_Change = (e) => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validation({
        ...activity,
        [e.target.name]: e.target.value,
      })
    );
  };

  const Handle_Submit = (e) => {
    e.preventDefault();
    setErrors(
      validation({
        ...activity,
        [e.target.name]: e.target.value,
      })
    );

    if (
      activity.name &&
      activity.difficulty &&
      activity.duration &&
      activity.season &&
      activity.nameCountry.length >= 1
    ) {
      dispatch(create_activity(activity));
      alert("Has creado una nueva Actividad!🤩");
      //* Seteo TODO desde CERO
      setActivity({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        nameCountry: [],
      });
      history.push("/home");
    }
  };

  let All_Countries = useSelector((state) => state.copy_all_countries).sort(
    (a, b) => {
      if (a.name < b.name) return -1;
      return 0;
    }
  );

  const list_Countries = All_Countries.map((c) => (
    <option key={c.id} >
      {c.name}
    </option>
  ));

  const Select_Countries = (e) => {
    setActivity({
      ...activity,
      nameCountry: activity.nameCountry.includes(e.target.value)
        ? activity.nameCountry
        : [...activity.nameCountry, e.target.value],
    });
    //! Se SETEA para evitar ERRORES cuando se llena campos NO OBLIGATORIOS
    setErrors(
      validation({
        ...activity,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <FormCreate
      Handle_Submit={Handle_Submit}
      Handle_Change={Handle_Change}
      list_Countries={list_Countries}
      errors={errors}
      Select_Countries={Select_Countries}
      activity={activity}
    />
  );
};
