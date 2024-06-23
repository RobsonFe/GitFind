import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import style from "./User.module.css";
import { FaComputer } from "react-icons/fa6";
import { useQuery } from "@apollo/client";
import { GET_USER_DETAILS } from "../../provider/query";
import { UserProps } from "../../types/user";

interface UserComponentProps extends UserProps {
  login: string;
}

const User: React.FC<UserComponentProps> = ({ login }) => {
  const { data, loading, error } = useQuery(GET_USER_DETAILS, {
    variables: { login },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data.user;

  return (
    <div className={style.user}>
      <img src={user.avatarUrl} alt={user.login} />
      <h2>{user.login}</h2>
      <h3>{user.name}</h3>
      {user.location && (
        <p className={style.location}>
          <MdLocationPin />
          <span>{user.location}</span>
        </p>
      )}
      {user.bio && (
        <p className={style.location}>
          <FaComputer />
          {user.bio}
        </p>
      )}
      <div className={style.stats}>
        <div>
          <p>Seguidores:</p>
          <p className={style.number}>{user.followers.totalCount}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p className={style.number}>{user.following.totalCount}</p>
        </div>
      </div>
      <Link to={`/repos/${user.login}`}>Ver Projetos</Link>
    </div>
  );
};

export default User;
