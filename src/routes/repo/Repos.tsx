import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BackBtn from "../../components/backBtn/BackBtn";
import { RepoProps } from "../../types/repo";
import Loader from "../../components/Loader/Loader";
import Repo from "../../components/repositorios/Repo";
import style from "./Repos.module.css";

const Repos = () => {
  const { username } = useParams();

  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const [perPage] = useState(10);

  useEffect(() => {
    const loadRepos = async (username: string, page: number) => {
      setIsLoading(true);
      const res = await fetch(
        `https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}`
      );
      const data = await res.json();

      //Ordenação de Objetos
      const orderedRepos = data.sort(
        (a: RepoProps, b: RepoProps) => b.stargazers_count - a.stargazers_count
      );

      setIsLoading(false);

      if (page === 1) {
        setRepos(orderedRepos);
      } else {
        setRepos((prevRepos) =>
          prevRepos ? [...prevRepos, ...orderedRepos] : orderedRepos
        );
      }
    };

    if (username) {
      loadRepos(username, currentPage);
    }
  }, [username, currentPage]);

  const loadMoreRepos = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  if (!repos && isLoading) return <Loader />;

  return (
    <div className={style.repos}>
      <BackBtn />
      <h2>Repositórios do Usuário: {username}</h2>
      {repos && repos.length === 0 && (
        <p>
          Usuário <strong>{username}</strong> Não Possui Repósitórios
        </p>
      )}
      {repos && repos.length > 0 && (
        <div className={style.reposContainer}>
          {repos.map((rep: RepoProps) => (
            <Repo key={rep.name} {...rep} />
          ))}
        </div>
      )}
      {repos && repos.length % perPage === 0 && (
        <button onClick={loadMoreRepos} className={style.loadMoreBtn}>
          Carregar mais
        </button>
      )}
    </div>
  );
};

export default Repos;
