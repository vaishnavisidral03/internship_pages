import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import {BsPersonFill} from "react-icons/bs";
import './SignUpPage.css';
import img1 from "./images/f1.jpg";
import {BrowserRouter as Router ,Link, useNavigate} from "react-router-dom";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useState,useEffect } from 'react';
import { gapi } from "gapi-script";
import Login from "../pages/Login/Login";
function SignUpPage() {

  const navigate=useNavigate()
  const moveToLogin=()=>{
    navigate("/loginsecond")
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
            <br />
            <Container>
        <table>
          <td>
            <Container className='con1'><br /><br /><br/><br/>
              <form className='form'>
                <div className="title">
                  <h2>Welcome To Duniyaa !</h2>
                 </div><br/>
                <button className="btn"><BsPersonFill/>Sign Up With Phone or Email</button><br/>
              <div className="hrs"> <hr className="hr"/><p> or</p><hr className="hr"/></div>
              { showloginButton ?
                // <GoogleLogin
                //     clientId={clientId}
                //     buttonText={<a href="#">Sign in with Google</a>}
                //     onSuccess={onLoginSuccess}
                //     onFailure={onLoginFailure}
                //      cookiePolicy={'single_host_origin'}
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


                {/* <button className='btns'><FcGoogle />Continue with Google</button><br /> */}
               <div> <button className='btn3'><BsApple />Continue with Apple</button><br /></div>
              <p> Already registered ?</p> <span onClick={moveToLogin} className={'logins'}>Login</span> 
              {/* <a href="">Login</a> */}
              </form>
            </Container>
          </td>
          <td><br /><br />
            <Container className='con'>

              <br /><br /><img src={img1} alt='img' className='img'></img><br />
              <br /><p><b>Sign up to get 100 USDT <br/>trading fee rebate!</b></p><br/>
              <p>Follow the registration steps</p>
            </Container>
          </td>
        </table>
      </Container>
        </div>
    )
};
export default SignUpPage;