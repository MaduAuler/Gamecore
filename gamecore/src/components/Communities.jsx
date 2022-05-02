import SideBar from "./SideBar"
import { Container } from "react-bootstrap"

const Communities = () =>{
 return(
    <main className="d-flex">
      <SideBar />
      <Container fluid style={{ backgroundColor: "#15172C" }}>
        <h1 className="mt-5 mb-5">Communities</h1>
      </Container>
    </main>
 )
}

export default Communities