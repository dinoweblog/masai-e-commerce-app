import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <nav>
      <ul className="header">
        <li>
          <Link to="/">Navbar</Link>
        </li>
        <li style={{ position: "relative" }}>
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </nav>
  );
};
