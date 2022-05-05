import { Container, Button, Badge } from "react-bootstrap";
import "../styles/feed.css";
import scavengers from "../scavengers.jpg";
import scavengers2 from "../scavengers2.webp";

const Feed = () => {
  return (
    <Container fluid style={{ backgroundColor: "#15172C", padding: "0" }}>
      <Container fluid className="feed-container">
        <h3 className=" text-left mt-5 mb-3 ml-2">Popular Categories</h3>
 
        <div className="d-flex align-items-center justify-content-around">
          <div className="left-main-div">
            <img
              alt="scavengers"
              src={scavengers}
              className="left-main-div-image"
            />
          </div>
          <div className="d-flex flex-column justify-content-between">
            <div className="d-flex right-main-div ml-3 align-items-center ">
              <div>
                <img
                  alt="scavengers"
                  src={scavengers2}
                  className="right-main-div-image"
                />
              </div>
              <div className="ml-5">
                <div>
                <Badge bg="success" className="mb-2" style={{alignItem:"left"}}>RPG</Badge>
                </div>
                <p className="right-text text-left">Live: Scavengers</p>
                <p className="text-left"> Portuguese</p>
                <Button className="right-div-little-button">
                  Watch Stream
                </Button>
              </div>
            </div>

            <div className="d-flex right-main-div ml-3  align-items-center mt-3">
              <div >
                <img
                  alt="scavengers"
                  src={scavengers2}
                  className="right-main-div-image"
                />
              </div>
              <div className="ml-5">
                <div>
                <Badge bg="success" className="mb-2">RPG</Badge>
                </div>
                <p className="right-text text-left">Live: Scavengers</p>
                <p className="text-left"> Portuguese</p>
                <Button className="right-div-little-button">
                  Watch Stream
                </Button>
              </div>
            </div>

            <div className="d-flex right-main-div ml-3 align-items-center mt-3">
              <div>
                <img
                  alt="scavengers"
                  src={scavengers2}
                  className="right-main-div-image"
                />
              </div>
              <div className="ml-5">
                <div>
                <Badge bg="success" className="mb-2">RPG</Badge>
                </div>
                <p className="right-text text-left">Live: Scavengers</p>
                <p className="text-left"> Portuguese</p>
                <Button className="right-div-little-button">
                  Watch Stream
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Feed;
