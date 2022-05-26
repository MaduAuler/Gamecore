import { Container, Button, Badge, Row, Col } from "react-bootstrap";
import "../styles/feed.css";
import scavengers from "../scavengers.jpg";
import scavengers2 from "../scavengers2.webp";
import image from "../twitch.jpg"
import image2 from "../streamer2.jpg"
import image3 from "../streamer.webp"
import { RiArrowRightSLine } from "react-icons/ri";

const Feed = () => {
  return (
    <Container fluid style={{ backgroundColor: "#15172C", padding: "0" }}>
      <Container fluid className="feed-container">
        <h3 className=" text-left mt-5 mb-3 ml-4">Popular Categories</h3>

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
              <div className="ml-5 d-flex flex-column align-items-start">
                <div>
                  <Badge
                    bg="success"
                    className="mb-2"
                    style={{ alignItem: "left" }}
                  >
                    RPG
                  </Badge>
                </div>
                <p className="right-text text-left">Live: Scavengers</p>
                <p className="text-left"> Portuguese</p>
                <Button className="right-div-little-button">
                  Watch Stream
                </Button>
              </div>
            </div>

            <div className="d-flex right-main-div ml-3  align-items-center mt-3">
              <div>
                <img
                  alt="scavengers"
                  src={scavengers2}
                  className="right-main-div-image"
                />
              </div>
              <div className="ml-5 d-flex flex-column align-items-start">
                <div>
                  <Badge bg="success" className="mb-2">
                    RPG
                  </Badge>
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
              <div className="ml-5 d-flex flex-column align-items-start">
                <div>
                  <Badge bg="success" className="mb-2">
                    RPG
                  </Badge>
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

        <h3 className=" text-left mt-5 mb-3 ml-4">Streamer teams</h3>
        <Row className="ml-2">
          <Col>
            <div className="col-card d-flex justify-content-between ">
            
                <div className="d-flex align-items-center justify-content-center">
                  <img alt="streamers" src={image}  className="image-row"/>
                </div>
                <div  className="d-flex align-items-center justify-content-center"> Peter Smits Twitch 
                Online</div>
              
              <div style={{height:"100%", width:"10%", backgroundColor:'#232C4D', fontSize:"2rem"}} className="d-flex align-items-center justify-content-center"><RiArrowRightSLine/></div>
            </div>
          </Col>

          <Col >
            <div className="col-card d-flex justify-content-between ">
            
                <div className="d-flex align-items-center justify-content-center">
                  <img alt="streamers" src={image2}  className="image-row"/>
                </div>
                <div  className="d-flex align-items-center justify-content-center"> oi hei oi ahsdhahsduhasd</div>
              
              <div style={{height:"100%", width:"10%", backgroundColor:'#232C4D', fontSize:"2rem"}} className="d-flex align-items-center justify-content-center arrow-div"><RiArrowRightSLine/></div>
            </div>
          </Col>

          <Col>
            <div className="col-card d-flex justify-content-between ">
            
                <div className="d-flex align-items-center justify-content-center ">
                  <img alt="streamers" src={image3}  className="image-row"/>
                </div>
                <div  className="d-flex align-items-center justify-content-center"> oi hei oi ahsdhahsduhasd</div>
              
              <div style={{height:"100%", width:"10%", backgroundColor:'#232C4D', fontSize:"2rem"}} className="d-flex align-items-center justify-content-center"><RiArrowRightSLine/></div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Feed;
