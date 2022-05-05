import { Container } from "react-bootstrap";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import Feed from "../components/Feed";

const Home = () => {
  return (
    <main className="d-flex">
      <SideBar />
      <Container fluid style={{ backgroundColor: "#15172C", padding: "0" }}>
        <Header />
        <Feed />
      </Container>
    </main>
  );
};

export default Home;