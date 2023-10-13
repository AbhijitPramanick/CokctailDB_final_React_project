import Styles from "../Styles/navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={Styles.main}>
      <div className={Styles.headingContainer}>
        <h1 className={Styles.heading}>TheCocktailDB</h1>
      </div>
      <ul className={Styles.pageList}>
        <Link to="/homepage" className={Styles.link}>
          Home
        </Link>
        <Link to="/cocktailname" className={Styles.link}>
          Search by name
        </Link>
        <Link to="/randomdrinks" className={Styles.link}>
          Random Drinks
        </Link>
        <Link to="/firstletter" className={Styles.link}>
          Search by First letter
        </Link>
      </ul>
    </div>
  );
};
export default Navbar;
