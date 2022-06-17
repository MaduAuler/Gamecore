import "../styles/sidebar.css";
import logo from "../logo.png";
import home from "../home.svg"
import profile from "../profile.svg"
import community from "../community.svg"
import logout from "../logout.svg"
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getMembersAction, getMyProfileAction } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const SideBar = () => {
  const members = useSelector((state) => state.members.stock);
  const myProfile = useSelector((state) => state.myProfile.stock);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMembersAction());
    dispatch(getMyProfileAction())
    console.log(myProfile.name)
  }, []);

  return (
    <div className="container-sidebar">
      <Container >
        <img src={logo} alt="logo" className="logo-img mt-3 mb-5  " />

        <div className="mb-3 ">
          <Link to="/">
            <Button variant="outline-secondary" size="lg" className="buttons">
              <div className="float d-flex align-items-center justify-content-center ">
              <img src={home} alt="home" className=" mr-2" />
              <span>Home</span>
              </div>
            </Button>
          </Link>
        </div>

        <div className="mb-3 ">
          <Link to="/communities">
            {" "}
            <Button
              variant="outline-secondary"
              size="lg"
              className="buttons"
            >
              <div className="float">
              <img src={community} alt="profile" className=" mr-2" />
              <span>Community</span>
              </div>
            </Button>
          </Link>
        </div>

        <div className=" mb-5">
          <Link to="/myprofile">
            <Button variant="outline-secondary" size="lg" className="buttons">
              <div className="float d-flex align-items-center justify-content-center ">
             <img src={profile} alt="profile" className=" mr-2" />
              <span>My Profile</span>
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
                <Link to={"/profile/" + member.name}>
                <Button variant="outline-secondary" size="sm" className="name-friends mr-3 buttons" >{member.name}</Button>{" "}</Link>
              </div>
            </div>
          );
        })}

        <hr className="mt-5 mb-5 hr-color" />

        <div className="mb-5  ">
          <Button variant="outline-secondary" size="lg" className="buttons">
            <div className="float">
            <img src={logout} alt="logout" className=" mr-2" /><span>Log out</span>
            </div>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default SideBar;
