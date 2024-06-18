import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Repo.module.css";
import BackBtn from "../../components/backBtn/BackBtn";

const Repo = () => {
  const { username } = useParams();

  return (
    <div>
      Repo {username}
      <BackBtn />
    </div>
  );
};

export default Repo;
