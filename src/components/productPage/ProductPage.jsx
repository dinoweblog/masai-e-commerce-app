import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "../../Redux/Products/action";
import { Card } from "../Card";
import { Category } from "../categoryPage/Category";
import "./style.css";

export const ProductPage = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  useEffect(() => {
    const categoryValue = JSON.parse(localStorage.getItem("category")) || "";
    dispatch(getProductsData(categoryValue));
  }, []);

  if (loading) return <p>Loading...</p>;

  console.log(products);
  return (
    <div>
      <div className="product-container">
        {products.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
};
