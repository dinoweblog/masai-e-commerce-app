import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCategoryData } from "../../Redux/Category/action";
import "./style.css";

export const Category = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category, loading } = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(getCategoryData());
  }, []);

  const redirectProductPage = (item) => {
    localStorage.setItem("category", JSON.stringify(item));
    navigate("/products");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="main">
      {category.map((item) => (
        <div
          className="cate-card"
          onClick={() => {
            redirectProductPage(item);
          }}
        >
          <h3>{item}</h3>
        </div>
      ))}
    </div>
  );
};
