import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPage.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import img1 from './images/f2.jpg';
import {BrowserRouter as Router, Link, Route,Routes } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useEffect } from 'react';
//import './Login.css';
import { useState } from 'react';
import { gapi } from 'gapi-script';
import Login from '../pages/Login/Login';

//import Signup from './Signup';
//import App from './App';
function LoginPage() {
  const navigate=useNavigate();
    const handleback=()=>{
    navigate("/sign")
    };
    useEffect(()=>{
      gapi.load("client:auth2",()=>{
        gapi.auth2.init({clientId:clientId})
      })
    },[])
    const clientId = "308398599587-j1vne1qo3jcnfeo7pb0vvcubfml5ujs8.apps.googleusercontent.com";

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {

        console.log('[Login Success] currentUser:', res.profileObj);

        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('[Login failed]res:',res);
        
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    
  return (
    
    <div>
      
      <Navbar bg="light" expand="sm">
        <Navbar.Brand href="#home" className='nav'><b>DUNIYAA</b></Navbar.Brand>
      </Navbar><br />
      <Navbar expand="sm" className='nav1'>
        <Navbar.Brand className='nav1'>URL</Navbar.Brand>
      </Navbar>
      <br /><br />
      <Container>
        <table>
          <td>
            <Container className='con1'><br /><br />
              <form className='form'>
                <div className="title">
                  <h4>DUNIYYA LOGIN</h4>
                  <p style={{margin:"10px"}}>Email/Phone number</p></div>
                <input type={"email"} className="in"></input>
                <button className="btn">Next</button>

                { showloginButton ?
                // <GoogleLogin
                //     clientId={clientId}
                //     buttonText={<a href="#">Sign in with Google</a>}
                //     // onClick={()=>{<Login/>}}
                //     onSuccess={onLoginSuccess}
                //     onFailure={onLoginFailure}
                //     cookiePolicy={'single_host_origin'}
                //     isSignedIn={true}
                //     className="btn2"
                // /> 
                <Login/>
                : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null}

                {/* <button className='btn2'><FcGoogle />Continue with Google</button><br /> */}

                <button className='btn2'><BsApple />Continue with Apple</button><br />
                {/* <Link to="./Signup" element={<Signup/>}>Create a Duniyaa Account</Link> */}
                {/* <a href={<Signup/>}>Create a Duniyaa Account</a> */}
                <p onClick={handleback} className={'account'} >Create a Duniyaa Account</p>
                {/* <Routes>
      <Route exact path="/signup" element={<Signup/>}></Route>
      </Routes> */}
{/* <Router>
                  <Route exact path='/Signup' component={Signup}></Route>
                   Create a Duniyaa Account</Router> */}
               </form>
            </Container>
          </td>
          <td><br /><br />
            <Container className='con'>

              <br /><br /><img src={img1} alt='img' className='img'></img><br />
              <br /><p><b>Log in with QR code</b></p>
              <p><span>Scan this code with the<a href='#' className='app'> <b >Duniyaa mobile</b><br />
                <b >app</b></a> to Log in instantly</span></p>

            </Container>
          </td>
        </table>
      </Container>
    </div>
  );
}


export default LoginPage;