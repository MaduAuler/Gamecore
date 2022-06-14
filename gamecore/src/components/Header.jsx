import "../styles/header.css";
import test from "../test.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="d-flex main-container align-items-center justify-content-between">
        <div></div>
      <input className="input ml-5" placeholder="Search.." />
<Link to="/profile">
  
      </Link>
    </div>
    
  );
};

export default Header;
