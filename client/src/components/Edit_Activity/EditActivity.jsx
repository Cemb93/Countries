import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { update_activity } from "../../redux/actions";
import { validation } from "../Create_Activity/Form_Validate";
import { FormEdit } from "./EditForm";
import { useHistory, useParams } from "react-router-dom";

export const EditActivity = () => {
  const initialState = {
    name: "",
    like: 0,
    difficulty: "",
    duration: "",
    season: "",
    // nameCountry: [],
  }

  const [activity, setActivity] = useState(initialState);

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  // useEffect(() => {
  //   dispatch(get_all_countries());
  // }, [dispatch]);

  useEffect(() => {
    setActivity(activity => activity)
  }, []);

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
      activity.season 
      // activity.nameCountry.length >= 1
    ) {
      dispatch(update_activity(activity, id));
      alert("Has actualizado la Actividad!🤩");
      //* Seteo TODO desde CERO
      setActivity(initialState);
      history.push("/activities");
      // history.go(0);
    }
  };

  // let All_Countries = useSelector((state) => state.copy_all_countries).sort(
  //   (a, b) => {
  //     if (a.name < b.name) return -1;
  //     return 0;
  //   }
  // );

  // const list_Countries = All_Countries.map((c) => (
  //   <option key={c.id} >
  //     {c.name}
  //   </option>
  // ));

  // const Select_Countries = (e) => {
  //   setActivity({
  //     ...activity,
  //     nameCountry: activity.nameCountry.includes(e.target.value)
  //       ? activity.nameCountry
  //       : [...activity.nameCountry, e.target.value],
  //   });
  //   //! Se SETEA para evitar ERRORES cuando se llena campos NO OBLIGATORIOS
  //   setErrors(
  //     validation({
  //       ...activity,
  //       [e.target.name]: e.target.value,
  //     })
  //   );
  // };

  return (
    <FormEdit
      Handle_Submit={Handle_Submit}
      Handle_Change={Handle_Change}
      // list_Countries={list_Countries}
      errors={errors}
      // Select_Countries={Select_Countries}
      activity={activity}
    />
  );
};
