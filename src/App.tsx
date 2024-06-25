import { Outlet } from "react-router-dom";
import style from "./App.module.css";
import SidebarBComponent from "./components/sidebar/sidebarBComponent";

function App() {
  return (
    <div className={style.app}>
      <div className={style.navbar}>
        <SidebarBComponent />
      </div>
      <div className={style.content}>
        <h1 className="h1">
          <strong>Git Find</strong>
        </h1>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
