import style from "./NavBar.module.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className={style.container}>
      <li>
        <Link to={"generation/1"}>Kanto</Link>
      </li>
      <li>
        <Link to={"generation/2"}>Jhoto</Link>
      </li>
      <li>
        <Link to={"generation/3"}>Hoen</Link>
      </li>
      <li>
        <Link to={"generation/4"}>Sinnoh</Link>
      </li>
      <li>
        <Link to={"generation/5"}>Teselia</Link>
      </li>
    </ul>
  );
};

export default NavBar;
