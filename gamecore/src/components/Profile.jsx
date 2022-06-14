import { Container } from "react-bootstrap";
import SideBar from "./SideBar";
import "../styles/profile.css";
import lol from "../lol.jpg";
import test from "../test.jpg";
import valorant from "../valorant.jpg";
import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaRegEdit,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { getMembersAction,getMyProfileAction } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const Profile = () => {
  const { name } = useParams();
  const members = useSelector((state) => state.members.stock);
  const myProfile = useSelector((state) => state.myProfile.stock);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMembersAction());
    dispatch(getMyProfileAction())
 
  }, []);

  const profile =  members.filter((c) => c.name === name); 

  return (
    <main className="d-flex">
      <SideBar />
      <Container fluid style={{ backgroundColor: "#15172C", padding: "0" }}>
        <div
          className="banner"
          style={{ backgroundImage: `url(${lol})` }}
        ></div>
        <div className="card-image-position">
         {profile ? <img src={profile[0].picture } alt="friends" className="img-profile " /> : <img src={myProfile.picture } alt="friends" className="img-profile " /> } 
        </div>
        <div className="edit d-flex justify-content-end mr-5">
          <FaRegEdit style={{fontSize:"1.5rem"}}/>
          <h5 className="ml-2">Edit</h5>
        </div>
        <div className="profile-div">
          <div className=" d-flex justify-content-between">
            <div style={{ width: "80%" }} className="mr-5">
              <div className=" d-flex justify-content-between">
                <h1 className="text-left mb-5">{profile ? profile[0].name : myProfile.name}</h1>
                <div className="icons-profile">
                  <FaTwitter /> <FaFacebookSquare /> <FaInstagram />
                </div>
              </div>
              <div className="aboutme text-left">
                <h4>About me</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ullam molestiae doloremque repudiandae dolor natus expedita
                  quas sunt cumque. Temporibus corporis autem repellat quam
                  debitis voluptate molestias illo et labore sit! Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. Ullam molestiae
                  doloremque repudiandae dolor natus expedita quas sunt cumque.
                  Temporibus corporis autem repellat quam debitis voluptate
                  molestias illo et labore sit!
                </p>
              </div>
              <div className="interests text-left mt-5">
                <h5>Interests</h5>
              </div>
            </div>
            <div className="groups mr-5 ml-5">
              <div className=" d-flex justify-content-between align-items-center mb-3">
                <h4>Groups</h4>
                <div className="arrow-profile">
                  <FaArrowAltCircleLeft className="mr-2" />
                  <FaArrowAltCircleRight />
                </div>
              </div>
              <div className=" d-flex  align-items-center mb-3">
                <div className="group-img">
                  <img src={valorant} alt="friends" className="img-group" />
                </div>
                <div className="group-name text-left ml-3">
                  <p style={{ margin: "0" }}>Valorant</p>
                  <p>11.555 members</p>
                </div>
              </div>
              <div className=" d-flex  align-items-center mb-3">
                <div className="group-img">
                  <img src={valorant} alt="friends" className="img-group" />
                </div>
                <div className="group-name text-left ml-3">
                  <p style={{ margin: "0" }}>Valorant</p>
                  <p>11.555 members</p>
                </div>
              </div>
              <div className=" d-flex  align-items-center mb-3">
                <div className="group-img">
                  <img src={valorant} alt="friends" className="img-group" />
                </div>
                <div className="group-name text-left ml-3">
                  <p style={{ margin: "0" }}>Valorant</p>
                  <p>11.555 members</p>
                </div>
              </div>
              <div className=" d-flex  align-items-center">
                <div className="group-img">
                  <img src={valorant} alt="friends" className="img-group" />
                </div>
                <div className="group-name text-left ml-3">
                  <p style={{ margin: "0" }}>Valorant</p>
                  <p>11.555 members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Profile;
