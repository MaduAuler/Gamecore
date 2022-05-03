import "../styles/header.css";
import test from "../test.jpg";

const Header = () =>{
    return(
        <div className="d-flex main-container align-items-center justify-content-between">
            <div className="div-space"></div>
        <div><input className="input ml-5" placeholder="Search.." /></div>
        
            <div className="d-flex align-items-center">
            
                <div>
                <p style={{color:'white'}}>Name Lastname</p>
                </div>
                <div>
                <img src={test} alt="profile-pic" className="profile-picture ml-2 mr-5"/>
                </div>
            </div>
        </div>
    )
}

export default Header