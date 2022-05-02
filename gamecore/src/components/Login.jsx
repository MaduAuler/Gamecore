import background from '../background.jpg'
import "../styles/login.css";
import logo from "../logo.png";


const Login = () =>{
    return(
        <div className='main-div' style={{ backgroundImage:`url(${background})`}}>
           <div className='space'> oi</div>
            <img src={logo} alt="logo" className="logo mt-5 mb-5 " />
          
            <div><input className='input mb-2' placeholder='Username..'/></div>
            <div><input className='input' placeholder='Password..'></input></div>
        <button className='button mt-5'>Login</button>
        <p className='mt-1 p-account'>No account yet? <span style={{fontWeight:"bold"}}>Sign up</span></p>
          
      </div>
    )
}

export default Login