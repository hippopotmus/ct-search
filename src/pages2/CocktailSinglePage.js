import React from "react";
import { useParams } from "react-router-dom";

const CocktailSinglePage = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);
  // const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

  React.useEffect(() => {
    async function getCocktail() {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      if (data.drinks) {
        console.log(data.drinks);
      } else {
        setCocktail(null);
      }
    }
    getCocktail();
  }, []);
  return (
    <section>
      <h2>{id}</h2>
    </section>
  );
};

export default CocktailSinglePage;
