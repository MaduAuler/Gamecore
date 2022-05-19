import { Container } from "react-bootstrap";
import SideBar from "./SideBar";
import "../styles/community.css";
import { useParams } from "react-router-dom";
import { getCommunitiesAction } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const Community = () => {
  const { game } = useParams();
  const communities = useSelector((state) => state.communities.stock);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommunitiesAction());
  }, []);

  const community = communities.filter((c) => c.name === game);

  return (
    <main className="d-flex">
      <SideBar />

      <Container fluid style={{ backgroundColor: "#15172C", padding: "0" }}>
        <div
          className="banner"
          style={{ backgroundImage: `url(${community[0].cover})` }}
        ></div>
        <div className="d-flex justify-content-between">
          <div>
            <h1 className="mt-5 mb-5 ml-5">{community[0].name}</h1>
          </div>
          <div style={{ width: "25%" }}>
            <div
              className="members-container"
              style={{ backgroundImage: `url(${community[0].cover})` }}
            >
              <Container fluid>
                <h1>MEMBERS</h1>
                {community[0].members.map((member) => {
                  return(<h2>{member}</h2>)
                  
                })}
              </Container>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Community;
