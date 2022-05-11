import SideBar from "./SideBar";
import { Col, Container, Row, Card } from "react-bootstrap";
import Header from "./Header";
import "../styles/communities.css";
import lol from "../lol.jpg";
import { useState, useEffect } from "react";

const Communities = () => {
const [communitiesData, setcommunitiesData] = useState([])

useEffect(() => {
  getCommunities()
  console.log(communitiesData)
}, [])


const getCommunities = async () => {
  try {
    const response = await fetch(
      'http://localhost:3000/community',
      
    )
    if (response.ok) {
      const data = await response.json()
      setcommunitiesData(data)
      
    } else {
      console.log('fetch is not ok')
    }
  } catch (error) {}
}

  return (
    <main className="d-flex">
      <SideBar />
      <Container fluid style={{ backgroundColor: "#15172C", padding: "0" }}>
        <Header />
        <Container fluid className="cards-container">
          <Row className="mt-5">
            <Col>
              <Card className="cards mt-5">
                <Card.Body className="card-image-position">
                  <img className="image-card" alt="community" src={lol} />
                  <Card.Title style={{ padding: "0" }} className="mt-3">
                    League of Legends
                  </Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">
                    1.512 members
                  </Card.Subtitle>

                  <button className="join-button">Join Community</button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="cards mt-5">
                <Card.Body className="card-image-position">
                  <img className="image-card" alt="community" src={lol} />
                  <Card.Title style={{ padding: "0" }} className="mt-3">
                    League of Legends
                  </Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">
                    1.512 members
                  </Card.Subtitle>

                  <button className="join-button">Join Community</button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="cards mt-5">
                <Card.Body className="card-image-position">
                  <img className="image-card" alt="community" src={lol} />
                  <Card.Title style={{ padding: "0" }} className="mt-3">
                    League of Legends
                  </Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">
                    1.512 members
                  </Card.Subtitle>

                  <button className="join-button">Join Community</button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <Card className="cards mt-5">
                <Card.Body className="card-image-position">
                  <img className="image-card" alt="community" src={lol} />
                  <Card.Title style={{ padding: "0" }} className="mt-3">
                    League of Legends
                  </Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">
                    1.512 members
                  </Card.Subtitle>

                  <button className="join-button">Join Community</button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="cards mt-5">
                <Card.Body className="card-image-position">
                  <img className="image-card" alt="community" src={lol} />
                  <Card.Title style={{ padding: "0" }} className="mt-3">
                    League of Legends
                  </Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">
                    1.512 members
                  </Card.Subtitle>

                  <button className="join-button">Join Community</button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="cards mt-5">
                <Card.Body className="card-image-position">
                  <img className="image-card" alt="community" src={lol} />
                  <Card.Title style={{ padding: "0" }} className="mt-3">
                    League of Legends
                  </Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">
                    1.512 members
                  </Card.Subtitle>

                  <button className="join-button">Join Community</button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <Card className="cards mt-5">
                <Card.Body className="card-image-position">
                  <img className="image-card" alt="community" src={lol} />
                  <Card.Title style={{ padding: "0" }} className="mt-3">
                    League of Legends
                  </Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">
                    1.512 members
                  </Card.Subtitle>

                  <button className="join-button">Join Community</button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="cards mt-5">
                <Card.Body className="card-image-position">
                  <img className="image-card" alt="community" src={lol} />
                  <Card.Title style={{ padding: "0" }} className="mt-3">
                    League of Legends
                  </Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">
                    1.512 members
                  </Card.Subtitle>

                  <button className="join-button">Join Community</button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="cards mt-5">
                <Card.Body className="card-image-position">
                  <img className="image-card" alt="community" src={lol} />
                  <Card.Title style={{ padding: "0" }} className="mt-3">
                    League of Legends
                  </Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">
                    1.512 members
                  </Card.Subtitle>

                  <button className="join-button">Join Community</button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </main>
  );
};

export default Communities;
