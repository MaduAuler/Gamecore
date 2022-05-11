import SideBar from "./SideBar";
import { Col, Container, Row, Card } from "react-bootstrap";
import Header from "./Header";
import "../styles/communities.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Communities = () => {
  const [communitiesData, setcommunitiesData] = useState([]);


  useEffect(() => {
    getCommunities();
  }, []);



  const getCommunities = async () => {
    try {
      let response = await fetch("http://localhost:3001/community");
      if (response.ok) {
        let data = await response.json();
        setcommunitiesData(data);
        communitiesData.push(data)
        //setcommunitiesData(data) its not working setcommunitiesData(...data)
        console.log("communitiesdata", communitiesData, "data", data);
      } else {
        console.log("fetch is not ok");
      }
    } catch (error) {}
  };


  return (
    <main className="d-flex">
      <SideBar />
      <Container fluid style={{ backgroundColor: "#15172C", padding: "0" }}>
        <Header />
        <Container fluid className="cards-container">
          <Row className="mt-5">
           
            {communitiesData && communitiesData.map((data) => {
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
  
                    <Link to={"/community"}> <button className="join-button">Join Community</button> </Link>
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
