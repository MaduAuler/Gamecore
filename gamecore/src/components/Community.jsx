import { Container } from "react-bootstrap";
import SideBar from "./SideBar";
import "../styles/community.css"
import lol from "../lol.jpg";

const Community = () => {
  return (
    <main className="d-flex">
      <SideBar />
      <Container fluid style={{ backgroundColor: "#15172C", padding:"0"}}>
        <div className="banner" style={{backgroundImage: `url(${lol})`}}></div>
        <h1 className="mt-5 mb-5">Community</h1>
      </Container>
    </main>
  );
};

export default Community;