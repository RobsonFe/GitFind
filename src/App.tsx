import { Outlet } from "react-router-dom";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.app}>
      <h1>GitHub Finder Repo</h1>
      <Outlet />
    </div>
  );
}

export default App;
