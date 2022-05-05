import "../styles/header.css";
import test from "../test.jpg";
import { BiSearchAlt } from "react-icons/bi";

const Header = () => {
  return (
    <div className="d-flex main-container align-items-center justify-content-between">
        <div></div>
      <input className="input ml-5" placeholder="Search.." />

      <div className="d-flex align-items-center justify-content-center">
        <div className="d-flex">
          <p style={{ color: "white" }}>Name </p>{" "}
          <p style={{ color: "white" }}>Lastname</p>
        </div>
        <div>
          <img
            src={test}
            alt="profile-pic"
            className="profile-picture ml-2 mr-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
