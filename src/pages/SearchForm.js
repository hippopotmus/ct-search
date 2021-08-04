import React from "react";

const SearchForm = ({ setSearchTerm }) => {
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = () => {
    e.preventDefault();
  };

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  return (
    <section className="section">
      <h2 className="section-title">Search Cocktails</h2>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search your favorite cocktails</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={searchCocktail}
            ref={searchValue}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
