import React from "react";
import { CocktailList } from "../pages";
import { SearchForm } from "../pages";

const Home = () => {
  const [loading, setLoading] = React.useState(false);
  const [searchItem, setSearchItem] = React.useState("d");
  const [cocktails, setCocktails] = React.useState([]);
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchItem}`;

  React.useEffect(() => {
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
              strAlcoholic,
              strDrinkThumb,
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
  }, [searchItem]);
  return (
    <main>
      <SearchForm searchItem={searchItem} />
      <CocktailList loading={loading} cocktails={cocktails} />
    </main>
  );
};

export default Home;
