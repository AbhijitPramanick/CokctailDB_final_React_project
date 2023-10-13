import Styles from "../Styles/homepage.module.css";
const HomePage = () => {
  return (
    <div className={Styles.main}>
      <img src="/images/cocktail_left.png" alt="Left cocktail image" />
      <h1>Welcome to the CocktailDB</h1>
      <img src="/images/cocktail_right.png" alt="Right cocktail image" />
    </div>
  );
};

export default HomePage;
