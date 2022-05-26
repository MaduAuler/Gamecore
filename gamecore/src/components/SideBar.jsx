import "../styles/sidebar.css";
import logo from "../logo.png";
import { AiFillHome } from "react-icons/ai";
import { CgCommunity, CgLogOut } from "react-icons/cg";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getMembersAction } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const SideBar = () => {
  const members = useSelector((state) => state.members.stock);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMembersAction());
  }, []);

  return (
    <div className="container-sidebar">
      <Container fluid>
        <img src={logo} alt="logo" className="logo-img mt-3 mb-5  " />

        <div className="mb-3 ">
          <Link to="/">
            <Button variant="outline-secondary" size="lg" className="buttons">
              <div className="float d-flex align-items-center justify-content-center ">
                <AiFillHome className="mr-2" /> <span>Home</span>
              </div>
            </Button>
          </Link>
        </div>

        <div className=" ">
          <Link to="/communities">
            {" "}
            <Button
              variant="outline-secondary"
              size="lg"
              className="mb-5 buttons"
            >
              <div className="float">
                <CgCommunity /> <span>Communities</span>
              </div>
            </Button>
          </Link>
        </div>
        <hr className="mt-3 mb-5 hr-color" />
        <div>
          {" "}
          <h4 className="title-friends  ">Friends</h4>
        </div>

        {/* After will be substitute for a map with the API friends */}

        {members.map((member) => {
          return (
            <div className="mt-3 align-items-center  d-flex w-100 ">
              <div>
                <img
                  src={member.picture}
                  alt="friends"
                  className="img-friends mr-3"
                />
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <Button variant="outline-secondary" size="sm" className="name-friends mr-3 buttons">{member.name}</Button>{" "}
              </div>
            </div>
          );
        })}

        <hr className="mt-5 mb-5 hr-color" />

        <div className="mb-5  ">
          <Button variant="outline-secondary" size="lg" className="buttons">
            <div className="float">
              <CgLogOut /> <span>Log out</span>
            </div>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default SideBar;
