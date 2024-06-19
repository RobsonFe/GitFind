import { Outlet } from "react-router-dom";
import style from "./App.module.css";
import SidebarComponent from "./components/sidebar/SidebarComponent";

function App() {
  return (
    <div className={style.app}>
      <SidebarComponent />
      <div className={style.content}>
        <h1>Git Find</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
