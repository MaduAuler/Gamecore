import { Container } from "react-bootstrap";
import SideBar from "./SideBar";
import "../styles/community.css";
import { useParams } from "react-router-dom";
import { getCommunitiesAction } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import streamer from "../streamer2.jpg";
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
        <h1 className=" community-name mt-5">{community[0].name}</h1>

        <div className="d-flex justify-content-between mt-5">
          <div className="div-post">
            <div className="yourpost mb-5 d-flex  align-items-center">
              <img
                src={streamer}
                alt="friends"
                className="img-post ml-3 mr-5 "
              />

              <div style={{ color: "#586696" }}>What is new on gaming?</div>
            </div>
            <div className="feedPost"></div>
          </div>

          <div className="lasthours mr-5">
            <div className="ml-3 mr-3 mt-4 mb-4">
              <h5 style={{ color: "#8795C4", textAlign: "left" }}>
                Last hours #
              </h5>
              <div className="d-flex justify-content-between align-items-center mb-3 mt-5">
                <div>#epicAce</div> <div class="badge ml-2">+20</div>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>#competitive</div> <div class="badge ml-2">+20</div>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>#teamwork</div> <div class="badge ml-2">+20</div>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>#epicAce</div> <div class="badge ml-2">+20</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Community;
