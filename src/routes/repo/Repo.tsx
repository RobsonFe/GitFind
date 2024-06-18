import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Repo.module.css";
import BackBtn from "../../components/backBtn/BackBtn";
import { RepoProps } from "../../types/repo";
import Loader from "../../components/Loader/Loader";

const Repo = () => {
  const { username } = useParams();

  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const loadRepos = async function (username: string) {
      const res = await fetch(`https://api.github.com/users/${username}/repos`);

      const data = await res.json();

      setIsLoading(false);

      setRepos(data);
    };

    if (username) {
      loadRepos(username);
    }
  }, []);

  if (!repos && isLoading) return <Loader />;

  return (
    <div>
      <BackBtn />
      <h2>Repositórios do Usuário: {username}</h2>
      {repos && repos.length === 0 && (
        <p>
          Usuário <strong>{username}</strong> Não Possui Repósitórios
        </p>
      )}
      {repos && repos.length > 0 && (
        <div>
          {repos.map((rep: RepoProps) => (
            <p>{rep.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Repo;
