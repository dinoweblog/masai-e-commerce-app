import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <nav>
      <ul className="header">
        <li className="navbar">
          <Link to="/">Navbar</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </nav>
  );
};
