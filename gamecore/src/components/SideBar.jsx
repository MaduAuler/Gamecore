import "../styles/sidebar.css";
import logo from "../logo.png";
import { AiFillHome } from "react-icons/ai";
import { CgCommunity, CgLogOut } from "react-icons/cg";
import { Button, Container } from "react-bootstrap";
import test from "../test.jpg";

const SideBar = () => {
  return (
    <div className="container-sidebar">
      <Container fluid>
       
        <img src={logo} alt="logo" className="logo-img mt-3 mb-5 " />

        <div className="mb-3 ">
          <Button variant="outline-secondary" size="lg" className="buttons">
            <div className="float">
              <AiFillHome /> <span>Home</span>
            </div>
          </Button>
        </div>

        <div className=" ">
          <Button
            variant="outline-secondary"
            size="lg"
            className="mb-5 buttons"
          >
            <div className="float">
              <CgCommunity /> <span>Communities</span>
            </div>
          </Button>
        </div>
        <hr className="mt-3 mb-5 hr-color" />
        <div>
          {" "}
          <h4 className="title-friends  ">Friends</h4>
        </div>

        {/* After will be substitute for a map with the API friends */}

        <div className="mt-3 align-items-center d-flex ">
          <div>
            <img src={test} alt="friends" className="img-friends mr-3" />
          </div>
          <div>
            <p className="name-friends">Janni Auler</p>
          </div>
        </div>
        <div className="mt-3 align-items-center  d-flex ">
          <div>
            <img src={test} alt="friends" className="img-friends mr-3" />
          </div>
          <div>
            <p className="name-friends">Janni Auler</p>
          </div>
        </div>
        <div className="mt-3 align-items-center  d-flex ">
          <div>
            <img src={test} alt="friends" className="img-friends mr-3" />
          </div>
          <div>
            <p className="name-friends">Janni Auler</p>
          </div>
        </div>
        <div className="mt-3 align-items-center  d-flex ">
          <div>
            <img src={test} alt="friends" className="img-friends mr-3" />
          </div>
          <div>
            <p className="name-friends">Janni Auler</p>
          </div>
        </div>
        <div className="mt-3 align-items-center  d-flex ">
          <div>
            <img src={test} alt="friends" className="img-friends mr-3" />
          </div>
          <div>
            <p className="name-friends">Janni Auler</p>
          </div>
        </div>

        <hr className="mt-5 mb-5 hr-color" />

        <div className="mb-3  ">
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
