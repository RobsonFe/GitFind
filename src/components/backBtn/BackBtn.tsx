import { useNavigate } from "react-router-dom";
import style from "./backBtn.module.css";

const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <>
      <button className={style.back_btn} onClick={() => navigate(-1)}>
        Voltar
      </button>
    </>
  );
};

export default BackBtn;
