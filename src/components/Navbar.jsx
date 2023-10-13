import Styles from "../Styles/navbar.module.css";

const Navbar = () => {
  return (
    <div className={Styles.main}>
      <div className={Styles.headingContainer}>
        <h1 className={Styles.heading}>TheCocktailDB</h1>
      </div>
      <ul className={Styles.pageList}>
        <li>Home</li>
        <li>Search by name</li>
        <li>Random Drinks</li>
        <li>Search by First letter</li>
      </ul>
    </div>
  );
};
export default Navbar;
