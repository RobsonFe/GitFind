import { useParams } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import BackBtn from "../../components/backBtn/BackBtn";
import { RepoProps } from "../../types/repo";
import Loader from "../../components/Loader/Loader";
import Repo from "../../components/repositorios/Repo";
import style from "./Repos.module.css";
import { GET_USER_REPOS } from "../../provider/queryList";

const Repos = () => {
  const { username } = useParams<{ username: string }>();
  const [repos, setRepos] = useState<RepoProps[]>([]);
  const perPage = 10;

  const { data, loading, error, fetchMore } = useQuery(GET_USER_REPOS, {
    variables: { username, perPage, cursor: null },
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      const newRepos = data.user.repositories.edges.map(({ node }: any) => ({
        name: node.name,
        html_url: node.url,
        language: node.primaryLanguage?.name,
        description: node.description,
        stargazers_count: node.stargazers.totalCount,
        forks_count: node.forkCount,
      }));
      setRepos((prevRepos) => [...prevRepos, ...newRepos]);
    },
  });

  if (loading && !data) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  const loadMoreRepos = () => {
    const { endCursor } = data.user.repositories.pageInfo;
    fetchMore({
      variables: { cursor: endCursor },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        const newEdges = fetchMoreResult.user.repositories.edges;
        const pageInfo = fetchMoreResult.user.repositories.pageInfo;

        return newEdges.length
          ? {
              user: {
                ...prevResult.user,
                repositories: {
                  ...prevResult.user.repositories,
                  edges: [...prevResult.user.repositories.edges, ...newEdges],
                  pageInfo,
                },
              },
            }
          : prevResult;
      },
    });
  };

  return (
    <div className={style.repos}>
      <BackBtn />
      <h2>Repositórios do Usuário: {username}</h2>
      {repos.length === 0 && (
        <p>
          Usuário <strong>{username}</strong> Não Possui Repositórios
        </p>
      )}
      {repos.length > 0 && (
        <div className={style.reposContainer}>
          {repos.map((rep: RepoProps) => (
            <Repo key={rep.name} {...rep} />
          ))}
        </div>
      )}
      {data.user.repositories.pageInfo.hasNextPage && (
        <button onClick={loadMoreRepos} className={style.loadMoreBtn}>
          Carregar mais
        </button>
      )}
    </div>
  );
};

export default Repos;
