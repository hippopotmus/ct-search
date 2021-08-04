import React from "react";
import "./styles.css";
import {
  About,
  Home,
  CocktailList,
  Cocktail,
  // CocktailSinglePage,
  SingleCocktail,
  SearchForm,
  Error,
  Navbar
} from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cocktail/:id">
          {/* <CocktailSinglePage /> */}
          <SingleCocktail />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
