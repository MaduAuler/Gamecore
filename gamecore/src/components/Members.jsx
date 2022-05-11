import { Container } from "react-bootstrap";
import "../styles/community.css"
import lol from "../lol3.jpg";
import "../styles/members.css"

const Members = () => {
  return (
    <div className="members-container" style={{backgroundImage: `url(${lol})`}}>
        <Container fluid>
            <h1>MEMBERS</h1>
        </Container>
    </div>
  );
};

export default Members;