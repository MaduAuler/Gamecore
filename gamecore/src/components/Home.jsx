import { Container } from "react-bootstrap";
import SideBar from "./SideBar";
import Header from "./Header";

const Home = () => {
  return (
    <main className="d-flex">
      <SideBar />
      <Container fluid style={{ backgroundColor: "#15172C", padding: "0" }}>
        <Header />
        <h1 className="mt-5 mb-5">home</h1>
      </Container>
    </main>
  );
};

export default Home;
