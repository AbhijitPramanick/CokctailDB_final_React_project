import Styles from "../Styles/firstLetter.module.css";
import { useEffect, useState } from "react";
const FirstLetter = () => {
  //Constants
  const api_url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";

  //States
  const [letters, setLetters] = useState([]);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  //useEffect
  useEffect(() => {
    const alphabet = [];
    for (let i = 0; i < 26; i++) {
      alphabet.push(String.fromCharCode("A".charCodeAt(0) + i));
    }
    setLetters(alphabet);
  }, []);

  //Displaying the state data in console.
  console.log(data);

  //Function to handle fetch operation
  async function handleFetch(alphabet) {
    setError(null); //resetting the error state to 'null'

    //try-catch the fetch's response.json()
    try {
      const res = await fetch(`${api_url}${alphabet}`);
      if (!res.ok) throw new Error("Network response is not OK!");
      console.log(`Response : ${res}`);
      const result = await res?.json();
      console.log(result);
      setData(result);
    } catch (err) {
      setError("Problem while setting the data");
      console.log(err);
    }
  }

  //return statement
  return (
    <div className={Styles.main}>
      <div className={Styles.container}>
        <h1>Search by first letter</h1>
        {error && <h1 className={Styles.msg}>{error}</h1>}
        <div className={Styles.letterList}>
          {letters.map((alphabet, index) => (
            <>
              <span
                key={alphabet}
                className={Styles.letterSpan}
                onClick={() => handleFetch(alphabet)}
              >
                {alphabet}
              </span>
            </>
          ))}
        </div>
        <div className={Styles.display}>
          {data?.drinks?.map((myDrink) => (
            <div className={Styles.drinkContainer}>
              <div className={myDrink.imgName}>
                <img
                  src={myDrink.strDrinkThumb}
                  alt="Drink image"
                  className={Styles.drinkImg}
                />
                <p className={Styles.name}>{myDrink.strDrink}</p>
              </div>
              <div className={Styles.instruction}>
                <p className={Styles.insHeading}>Instruction</p>
                <p className={Styles.insInfo}>{myDrink.strInstructions}</p>
              </div>
              <div className={Styles.otherDetails}>
                <p>
                  Is it Alcoholic ? :{" "}
                  {myDrink.strAlcoholic == "Alcoholic" ? "Yes" : "No"}
                </p>
                <p>Category : "{myDrink.strCategory}"</p>
                <p>
                  International Bartenders Association (IBA) :
                  {myDrink.strIBA || " Not recognised"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FirstLetter;
