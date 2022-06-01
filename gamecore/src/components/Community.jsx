import { Container } from "react-bootstrap";
import SideBar from "./SideBar";
import "../styles/community.css";
import { useParams } from "react-router-dom";
import { getCommunitiesAction } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const Community = () => {
  const { game } = useParams();
  const communities = useSelector((state) => state.communities.stock);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommunitiesAction());
  }, []);

  const community = communities.filter((c) => c.name === game);

  return (
    <main className="d-flex">
      <SideBar />

      <Container fluid style={{ backgroundColor: "#15172C", padding: "0" }}>
        <div
          className="banner"
          style={{ backgroundImage: `url(${community[0].cover})` }}
        ></div>
         <h1 className="mt-5 mb-5 ml-5">{community[0].name}</h1>
      
       
          <div className="d-flex justify-content-center align-items-center">
            
            <div className="feedPost ml-5">
             
              <hr className="hrcolor"/>
            </div>
          </div>
         
    
      </Container>
    </main>
  );
};

export default Community;
