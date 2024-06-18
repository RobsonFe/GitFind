import { BsCodeSlash } from "react-icons/bs";
import { RepoProps } from "../../types/repo";
import { AiOutlineFork, AiOutlineStar } from "react-icons/ai";
import { MdOutlineDescription } from "react-icons/md";
import { RiGitRepositoryLine } from "react-icons/ri";

const Repo = ({
  name,
  html_url,
  language,
  description,
  stargazers_count,
  forks_count,
}: RepoProps) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>
        <BsCodeSlash />
        {language}
      </p>
      <div>
        <div>
          <AiOutlineStar />
          <span>{stargazers_count}</span>
        </div>
        <div>
          <AiOutlineFork />
          <span>{forks_count}</span>
        </div>
      </div>
      <div>
        <MdOutlineDescription />
        <h5>{description}</h5>
      </div>
      <a href={html_url} target="_blank">
        <span>Ver Código</span>
        <RiGitRepositoryLine />
      </a>
    </div>
  );
};

export default Repo;
