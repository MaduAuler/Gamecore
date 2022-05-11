import { Container } from "react-bootstrap";
import SideBar from "./SideBar";
import "../styles/community.css"
import lol from "../lol.jpg";
import Members from "./Members";

const Community = () => {
  return (
    <main className="d-flex">
      <SideBar />
      <Container fluid style={{ backgroundColor: "#15172C", padding:"0"}}>
        <div className="banner" style={{backgroundImage: `url(${lol})`}}></div>
        <div className="d-flex justify-content-between">
        <div><h1 className="mt-5 mb-5 ml-5">Community</h1></div>
        <div style={{width:"25%"}}><Members/></div>
        </div>
       
      </Container>
    </main>
  );
};

export default Community;