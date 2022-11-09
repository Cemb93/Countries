import { Link } from "react-router-dom";
import s from './PageNotFound.module.css';

export const PageNotFound = () => {
  return (
    <div className={s.div_principal} >
      <h1 className={s.titles} >ERROR 404!!</h1>
      <h2 className={s.titles} >Page Not Found</h2>
      <Link to={'/home'} >
        <button className={s.btn} >Regresar</button>
      </Link>
    </div>
  );
}