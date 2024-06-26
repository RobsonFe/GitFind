import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";
import style from "./Search.module.css";
import Greetings from "../greetings/Greetings";
import ButtonGroup from "../btnGroup/ButtonGroup";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };

  return (
    <div className={style.search}>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div className={style.container}>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
      <Greetings />
      <ButtonGroup />
    </div>
  );
};

export default Search;
