import NavBar from "../../components/nav/NavBar";
import { Outlet } from "react-router-dom";
import style from "./HomeTemplate.module.scss";

const HomeTemplate = () => {
  return (
    <div className={style.container}>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default HomeTemplate;
