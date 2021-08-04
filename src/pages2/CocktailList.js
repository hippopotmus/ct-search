import React from "react";
import Cocktail from "../pages/Cocktail";

const CocktailList = ({ cocktails, loading }) => {
  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }
  if (!cocktails) {
    return <h2 className="section-title">No item to show!</h2>;
  }
  return (
    <section>
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-section">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
