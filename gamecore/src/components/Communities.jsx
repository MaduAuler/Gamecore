import SideBar from "./SideBar";
import { Col, Container, Row, Card } from "react-bootstrap";
import Header from "./Header";
import "../styles/communities.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getCommunitiesAction } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux'

const Communities = () => {
  const communities = useSelector((state) => state.communities.stock)
  const dispatch = useDispatch()
 

  useEffect(()=> {
    dispatch(getCommunitiesAction())
}, [])


  return (
    <main className="d-flex">
      <SideBar />
      <Container fluid style={{ backgroundColor: "#15172C", padding: "0" }}>
        <Header />
        <Container fluid className="cards-container">
          <Row className="mt-5">
           
            {communities && communities.map((data) => {
              return(
                <Col>
                <Card className="cards mt-5">
                  <Card.Body className="card-image-position">
                    <img className="image-card" alt="community" src={data.cover} />
                    <Card.Title style={{ padding: "0" }} className="mt-3">
                      {data.name}
                    </Card.Title>
                    <Card.Subtitle className="mb-3 text-muted">
                      1.512 members
                    </Card.Subtitle>
  
                    <Link to={"/community/" + data.name}> <button className="join-button">Join Community</button> </Link>
                  </Card.Body>
                </Card>
              </Col>
              )
            })}
          
          </Row>
        </Container>
      </Container>
    </main>
  );
};

export default Communities;
