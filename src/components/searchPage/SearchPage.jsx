import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchProductsData } from "../../Redux/Search/action";
import { Card } from "../Card";
import "./style.css";

export const SearchPage = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { search_products, loading } = useSelector(
    (state) => state.searchProducts
  );

  const getInput = (event) => {
    setInput(event.target.value);
  };

  const getSearchData = () => {
    dispatch(getSearchProductsData(input));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div className="input-box">
        <input type="text" value={input} onChange={getInput} />
        <button onClick={getSearchData}>Search</button>
      </div>
      {input === "" && <p></p>}
      {input !== "" && search_products.length === 0 && (
        <h2 style={{ textAlign: "center" }}>Oops! No Result available</h2>
      )}

      {input !== "" && search_products.length !== 0 && (
        <div className="search-container">
          {search_products.map((item) => (
            <Card item={item} />
          ))}
        </div>
      )}
    </div>
  );
};
