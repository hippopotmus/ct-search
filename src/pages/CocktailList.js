import React from "react";
import Cocktial from "./Cocktail";

const CocktailList = ({ loading, cocktails }) => {
  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }
  if (cocktails.length < 1) {
    return <h2 className="section-title">No cocktails to match</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktial key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
