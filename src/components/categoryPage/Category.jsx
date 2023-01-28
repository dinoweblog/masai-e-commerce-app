import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryData } from "../../Redux/Category/action";
import "./style.css";

export const Category = () => {
  const dispatch = useDispatch();
  const { category, loading } = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(getCategoryData());
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="main">
      {category.map((item) => (
        <div className="cate-card">
          <h3>{item}</h3>
        </div>
      ))}
    </div>
  );
};
