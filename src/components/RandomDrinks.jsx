import { useState } from "react";
import Styles from "../styles/randomDrinks.module.css";

const RandomDrinks = () => {
  const api_url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  async function handleFetch() {
    try {
      const res = await fetch(api_url);
      if (!res.ok) {
        throw new Error("Network response failed!");
      }
      const result = await res.json();
      setData(result);
    } catch (err) {
      setError("Fetch operation failed");
      console.log(err);
    }
  }
  console.log(data);
  return (
    <div className={Styles.main}>
      <div className={Styles.display}>
        <h1>Display of random drink</h1>
        <button className={Styles.searchBtn} onClick={handleFetch}>
          Click here
        </button>
        {error && <h1 className={Styles.msg}>{error}</h1>}
        {data && (
          <div className={Styles.drinkContainer}>
            <div className={data.drinks[0].imgName}>
              <img
                src={data.drinks[0].strDrinkThumb}
                alt="Drink image"
                className={Styles.drinkImg}
              />
              <p className={Styles.name}>{data.drinks[0].strDrink}</p>
            </div>
            <div className={Styles.instruction}>
              <p className={Styles.insHeading}>Instruction</p>
              <p className={Styles.insInfo}>{data.drinks[0].strInstructions}</p>
            </div>
            <div className={Styles.otherDetails}>
              <p>
                Is it Alcoholic ? :{" "}
                {data.drinks[0].strAlcoholic == "Alcoholic" ? "Yes" : "No"}
              </p>
              <p>Category : "{data.drinks[0].strCategory}"</p>
              <p>
                International Bartenders Association (IBA) :
                {data.drinks[0].strIBA || " Not recognised"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RandomDrinks;
