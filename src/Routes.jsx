import { Routes, Route } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { Home } from "./components/homePage/Home";
import { SearchPage } from "./components/searchPage/SearchPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
    </Route>
  </Routes>
);
export default AppRoutes;
