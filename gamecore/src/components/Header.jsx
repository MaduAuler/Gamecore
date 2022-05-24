import "../styles/header.css";
import test from "../test.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="d-flex main-container align-items-center justify-content-between">
        <div></div>
      <input className="input ml-5" placeholder="Search.." />
<Link to="/profile">
     <button className="buttonHeader mr-5" > <div className="d-flex align-items-center justify-content-center">
        <div className="d-flex">
          <p style={{ color: "white" }} className="mr-2">Name </p>{" "}
          <p style={{ color: "white" }}>Lastname</p>
        </div>
        <div>
          <img
            src={test}
            alt="profile-pic"
            className="profile-picture ml-2 "
          />
        </div>
      </div>
      </button>
      </Link>
    </div>
    
  );
};

export default Header;
