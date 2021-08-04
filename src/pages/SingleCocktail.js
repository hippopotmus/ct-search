import React from "react";
import { useParams, Link } from "react-router-dom";

const SingleCocktail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

  React.useEffect(() => {
    async function getCocktail() {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.drinks) {
          const {
            idDrink: id,
            strDrink: name,
            strDrinkThumb: image,
            strCategory: category,
            strInstructions: instructions,
            strAlcoholic: info,
            strGlass: glass,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return <section className="section-title">Loading...</section>;
  }

  if (!cocktail) {
    return <section className="section-title">No cocktail to display</section>;
  } else {
    const {
      name,
      image,
      info,
      category,
      glass,
      instructions,
      ingredients
    } = cocktail;
    return (
      <section>
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
        <h2 className="section-title">{name}</h2>
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>Name:{name}</p>
          <p>Category:{category}</p>
          <p>info:{info}</p>
          <p>glass:{glass}</p>
          <p>instructions:{instructions}</p>
          <p>
            ingredients:{" "}
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
            })}
          </p>
        </div>
      </section>
    );
  }
};

export default SingleCocktail;
