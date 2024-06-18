import { MdLocationPin } from "react-icons/md";
import { UserProps } from "../../types/user";
import { Link } from "react-router-dom";
import style from "./User.module.css";
import { FaComputer } from "react-icons/fa6";

const User = ({
  avatar_url,
  login,
  name,
  location,
  bio,
  followers,
  following,
}: UserProps) => {
  return (
    <div className={style.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      <h3>{name}</h3>
      {location && (
        <p className={style.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      {bio && (
        <p className={style.location}>
          <FaComputer />
          {bio}
        </p>
      )}
      <div className={style.stats}>
        <div className={style.stats}>
          <p>Seguidores:</p>
          <p className={style.number}>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p className={style.number}>{following}</p>
        </div>
      </div>
      <Link to={`/repos/${login}`}>Ver Projetos</Link>
    </div>
  );
};

export default User;
