import { useState, useEffect } from "react";
import { Card } from "../Card";
import { Category } from "../categoryPage/Category";
import "./style.css";

export const Home = () => {
  return (
    <div>
      <Category />
      <h2 style={{ marginTop: "30px" }}>Home</h2>
      <div className="container"></div>
    </div>
  );
};
