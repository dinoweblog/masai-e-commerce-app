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
    dispatch(getProductsData());
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <Category />
      <h2 style={{ marginTop: "30px" }}>Home</h2>
      <div className="container"></div>
    </div>
  );
};
