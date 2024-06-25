import { Outlet } from "react-router-dom";
import style from "./App.module.css";
import SidebarBComponent from "./components/sidebar/sidebarBComponent";
import Footer from "./components/footer/Footer";

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
      <Footer />
    </div>
  );
}

export default App;
