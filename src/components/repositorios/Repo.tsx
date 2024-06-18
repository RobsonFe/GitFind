import { BsCodeSlash } from "react-icons/bs";
import { RepoProps } from "../../types/repo";
import { AiOutlineFork, AiOutlineStar } from "react-icons/ai";
import { RiGitRepositoryLine } from "react-icons/ri";
import style from "./Repo.module.css";

const Repo = ({
  name,
  html_url,
  language,
  description,
  stargazers_count,
  forks_count,
}: RepoProps) => {
  return (
    <div className={style.repo}>
      <h3>{name}</h3>
      <p className={style.language}>
        <BsCodeSlash />
        <span>{language}</span>
      </p>
      <div className={style.stats}>
        <div>
          <AiOutlineStar />
          <span>{stargazers_count}</span>
        </div>
        <div>
          <AiOutlineFork />
          <span>{forks_count}</span>
        </div>
      </div>
      <div className={style.stats}>
        <h5>{description}</h5>
      </div>
      <a href={html_url} target="_blank" className={style.repoBtn}>
        <span>Ver Código</span>
        <RiGitRepositoryLine />
      </a>
    </div>
  );
};

export default Repo;
