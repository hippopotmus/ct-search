import React, { useEffect } from "react";
import { SearchForm } from "../pages";
import { CocktailList } from "../pages";

const Home = () => {
  const [loading, setLoading] = React.useState(false);
  const [cocktails, setCocktails] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("d");
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`;

  useEffect(() => {
    setLoading(true);
    async function getDrinks() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
          const newCocktails = drinks.map((item) => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strGlass
            } = item;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass
            };
          });
          setCocktails(newCocktails);
          console.log(newCocktails);
        } else {
          setCocktails([]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getDrinks();
  }, [searchTerm]);

  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktailList loading={loading} cocktails={cocktails} />
    </main>
  );
};

export default Home;
