import { Container } from "react-bootstrap";
import SideBar from "./SideBar";

const Home = () => {
  return (
    <main className="d-flex">
      <SideBar />
      <Container fluid style={{ backgroundColor: "#15172C" }}>
        <h1 className="mt-5 mb-5">home</h1>
      </Container>
    </main>
  );
};

export default Home;
