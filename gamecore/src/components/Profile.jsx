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
import { getMembersAction,getMyProfileAction, getCommunitiesAction } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const Profile = () => {
  const { name } = useParams();
  const members = useSelector((state) => state.members.stock);
  const allCommunities = useSelector((state) => state.communities.stock);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMembersAction());
    dispatch(getMyProfileAction())
    dispatch(getCommunitiesAction())
 
  }, []);

  const profile =  members.filter((c) => c.name === name); 
  let userCommunities = [] // initializing the array
profile[0].communities.forEach((community) => { // cycling the community names in the user
    const foundCommunity = allCommunities.find((c) => c.name === community) // finding a match between the community name and the property 'name' of every community
    if (foundCommunity) { // if a match is found
      userCommunities.push(foundCommunity) // push the object of the found community in userCommunities
    }
  })

  return (
    <main className="d-flex">
      <SideBar />
      <Container fluid style={{ backgroundColor: "#15172C", padding: "0" }}>
        <div
          className="banner"
          style={{ backgroundImage: `url(${profile[0].background})` }}
        ></div>
        <div className="card-image-position">
          <img src={profile[0].picture } alt="friends" className="img-profile " /> 
        </div>
        <div className="edit d-flex justify-content-end mr-5">
          <FaRegEdit style={{fontSize:"1.5rem"}}/>
          <h5 className="ml-2">Edit</h5>
        </div>
        <div className="profile-div">
          <div className=" d-flex justify-content-between">
            <div style={{ width: "80%" }} className="mr-5">
              <div className=" d-flex justify-content-between">
                <h1 className="text-left mb-5">{profile[0].name}</h1>
                <div className="icons-profile">
                  <FaTwitter /> <FaFacebookSquare /> <FaInstagram />
                </div>
              </div>
              <div className="aboutme text-left">
                <h4>About me</h4>
                <p>
               {profile[0].about}
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
              {   userCommunities.map((community)=>(
                <div className=" d-flex  align-items-center mb-3">
                <div className="group-img">
                  <img src={community.cover} alt="friends" className="img-group" />
                </div>
                <div className="group-name text-left ml-3">
                  <p style={{ margin: "0" }}>{community.name}</p>
                  <p>11.555 members</p>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Profile;
