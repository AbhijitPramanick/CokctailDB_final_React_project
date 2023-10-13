import { useEffect, useState } from "react";
import Styles from "../styles/cocktailName.module.css";

const CocktailName = () => {
  const api_url = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";
  const [userInp, setUserInp] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  //instead of using `useEffect` to get hold of the state of the data after change, simply consoling it.
  console.log(data);

  //   Handling the fetch
  async function handleFetch() {
    console.log(`User input : ${userInp}`);
    if (userInp.length == 0) {
      setError("the input field cannot be empty. Enter a valid input.");
    } else {
      // Resetting the Error state
      setError(null);
      try {
        // Fetching the API when the user input is defined
        const response = await fetch(`${api_url}${userInp}`);
        if (!response.ok) {
          throw new Error("Network response is not Ok!");
        }
        const result = await response?.json();
        setData(result);
      } catch (err) {
        setError("Problem while fetching the data");
        console.log(err);
      }
    }
  }
  return (
    <div>
      <div className={Styles.main}>
        <div className={Styles.container}>
          <div className={Styles.nav}>
            <input
              type="text"
              className={Styles.inp_txt}
              id="inp_txt"
              placeholder="Enter the name..."
              onChange={(e) => setUserInp(e.target.value)}
            />
            <button
              className={Styles.search_btn}
              id="search_btn"
              onClick={handleFetch}
            >
              Click to search
            </button>
          </div>
          {error && <h1 className={Styles.msg}>{error}</h1>}
          <div className={Styles.display}>
            {data &&
              data.drinks.map((myDrink) => (
                <div key={myDrink.idDrink} className={Styles.drinkContainer}>
                  <div className={Styles.drinkName}>
                    <h1 className={Styles.heading}>{myDrink.strDrink}</h1>
                  </div>
                  <div className={Styles.drinkInfo}>
                    <img src={myDrink.strDrinkThumb} alt="Drink image" />
                    <div className={Styles.insInfo}>
                      <p className={Styles.instructHeading}>Instructions</p>
                      <p className={Styles.instruct}>
                        {myDrink.strInstructions}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocktailName;
