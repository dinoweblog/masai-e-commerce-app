import { Routes, Route } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { Category } from "./components/categoryPage/Category";
import { ProductPage } from "./components/productPage/ProductPage";
import { SearchPage } from "./components/searchPage/SearchPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route path="/" element={<Category />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Route>
  </Routes>
);
export default AppRoutes;
