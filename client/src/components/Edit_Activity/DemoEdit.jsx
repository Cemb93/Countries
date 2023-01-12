import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update_activity, get_all_countries, get_detail } from "../../redux/actions";
import { validation } from "../Create_Activity/Form_Validate";
import { FormEdit } from "./DemoForm";
import { useHistory, useParams } from "react-router-dom";

export const EditActivity = () => {
  const [activity, setActivity] = useState({
    name: "",
    like: 0,
    difficulty: "",
    duration: "",
    season: "",
    nameCountry: [],
  });

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  //* Invoco la "Action" para poder visualizar los "Paises"
  useEffect(() => {
    dispatch(get_all_countries());
    dispatch(get_detail(id));
  }, [dispatch]);

  const { detail } = useSelector((state) => state);

  useEffect(() => {
    if (Object.keys(detail).length !== 0) {
      setActivity({
        name: "",
        like: 0,
        difficulty: "",
        duration: "",
        season: "",
        nameCountry: [],
      });
    }
  }, [detail]);

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
      dispatch(update_activity(activity, id));
      alert("Has actualizado la Actividad!🤩");
      //* Seteo TODO desde CERO
      setActivity({
        name: "",
        like: 0,
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
    <FormEdit
      Handle_Submit={Handle_Submit}
      Handle_Change={Handle_Change}
      list_Countries={list_Countries}
      errors={errors}
      Select_Countries={Select_Countries}
      activity={activity}
    />
  );
};
