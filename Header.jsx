import React, { useEffect, useState } from 'react';
import { MdNotificationsActive, MdSwitchAccount, MdLogin, MdSettings, MdHelp } from 'react-icons/md'
// import { MDBSwitch } from 'mdb-react-ui-kit';
// import SideBar from "../components/Sidebar";
import {Menu,MenuItem,MenuButton,SubMenu} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FaSun, FaMoon, FaMicrophone } from 'react-icons/fa'
import "./addedplace.css";
import { NavLink } from 'react-router-dom';
// notification import
import addNotification from 'react-push-notification';
import { Notifications } from 'react-push-notification';
import Profile from './Profile';
import { Navbar, Nav,Container } from "react-bootstrap";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "./theme.jsx";
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Routes,
  // Redirect,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Popup from '../pages/AddNewPlace/Popup';
import Login from '../pages/Login/Login';
import { useRef, setPreviewImage } from "react";
import Modal from 'react-bootstrap/Modal';
import { Button,  Row, Col } from 'reactstrap';
import img1 from './images/f.jpg';
import './Profile.css';
import { MdDelete } from 'react-icons/md';
import { BiArrowBack } from 'react-icons/bi';
import { IoIosColorPalette, IoIosGlobe } from 'react-icons/io';
import {MdModeEditOutline} from 'react-icons/md';
//import Header from "./Header";
import Homepage from "../pages/Homepage";
//import { useNavigate } from "react-router-dom";
//import {Container} from "reactstrap";
// import LoginPage from './LoginPage';
// import SignUpPage from './SignUpPage';
import axios from 'axios';
import { getCurrentUserDetail } from '../auth';
import { getUserProfileDetails } from '../services/user-service';




const StyledApp = styled.div`
 color: ${(props) => props.theme.fontColor};
`;

export default function Header() {

  // const[info,setInfo]=useState([]);
  const[name,setname]=useState();
  const[email,setEmail]=useState();
  const[p,setP]=useState();
  const[nop,setnop]=useState();
  const[noh,setnoh]=useState();
  const [user,setUser] = useState();

  const [profileInfo, setProfileInfo] = useState({});
  

    useEffect(()=>{
      setUser(getCurrentUserDetail());

      //   axios.get("http://3.109.26.2:8080/api/vv1/profile/getSingleProfile?userId=8f6b5fdc-7b3a-455c-863d-83a6580e0c90"
    // ).then((res)=>{
    //   // console.log(res.data.data[0].emailId)
    //   // console.log(res.data.data[0].googleSignInObj)
    //   console.log(res.data.data[0].googleSignInObj.email)
    //   console.log(res.data.data[0].googleSignInObj.pictureUrl)
    //   console.log(res.data.data[0].googleSignInObj.name)
    //   console.log(res.data.data[0].numberOfHHPosts)
    //   console.log(res.data.data[0].numberOfHHHelps)
    //   setname(res.data.data[0].googleSignInObj.name)
    //   setEmail(res.data.data[0].googleSignInObj.email)
    //   setP(res.data.data[0].googleSignInObj.pictureUrl)
    //   setnop(res.data.data[0].numberOfHHPosts)
    //   setnoh(res.data.data[0].numberOfHHHelps)
    //   //console.log(res.data.data[0].googleSignInObj[0].email)
    //   // setInfo(res);
    //   //console.log();
    // }).catch(err=>{
    //   console.log(err)
    // })
    
    console.log(profileInfo);
    console.log(profileInfo.firstName);
    console.log(profileInfo.lastName);

    setname(profileInfo.firstName + profileInfo.lastName);
    setnoh(profileInfo.numberOfHHHelps);
    setnop(profileInfo.numberOfHHPosts);
    setP(profileInfo.profileImgHigh);
    
    },[profileInfo,user])
  

    
const[show,setShow]=useState(false);
const handleShow=()=>{

  setShow(true);
 // console.log("getcurrentuserdetails")
  
  
  getUserProfileDetails(user).then((data)=> setProfileInfo(data));

  // getInfo();
}
const handleClose=()=>setShow(false);

// const navigate=useNavigate();
// const handleback=()=>{
//   navigate("/home")
// }

const [modal, setmodal] = useState(true);
const [state,setState]=useState(img1);
const imageHandler=(e)=>
{
setState(URL.createObjectURL(e.target.files[0]))
}

const Handledelete=(e)=>
{
e.preventDefault();
setState(img1);
//setState(e.target.state);
}
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };


  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  function buttonOnClick() {
    addNotification({
      title: 'Warning',
      native: true
    })
  };
  return ( 
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme} >
        
    <GlobalStyles />

      <StyledApp>
        <header className="">
          <Navbar collapseOnSelect expand="lg" className="pt-0 pb-0 header">

            <Container>
         
              <Navbar.Brand href="/" className="lg"><span className="rightmargin">D</span><span className='lgnm'>Duniyaa Web App</span></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" className='menu'>
                <Nav className="me-auto">


                </Nav>
                <Nav className=" nav-header mt-2  ">
                  <nav className="navbar navbar-light bg-none">
                  </nav>

                  {/* <Nav.Link className={splitLocation[1] === "" ? "active" : ""} href="/">Home</Nav.Link> */}
                  {/* <Nav.Link eventKey={2} href="/About">            
                  About
                  </Nav.Link>*/}
                  <Nav.Link className={splitLocation[1] === "AddNewPlace" ? "active" : ""} href="/popup" >Add New Place </Nav.Link>

                  {/* <Nav.Link href="#deets">Contact</Nav.Link>*/}
                  
                  <Nav.Link className={splitLocation[1] === "MyPlaces" ? "active" : ""} href="/MyPlaces">My Places</Nav.Link>
                  <Nav.Link className={splitLocation[1] === "Stepper" ? "active" : ""} href="/Stepper">Stepper</Nav.Link>
                  {/* <Nav.Link className={splitLocation[1] === "Login" ? "active" : ""} eventKey={2} href="/Login"><span className='me-4'>Login</span></Nav.Link> */}
                 
                 
                 
                  {/* <Nav.Link className={splitLocation[1] === "Login" ? "active" : ""} eventKey={2} href="/Login"><span className='me-4'> <Login/> </span></Nav.Link> */}
                 
                  <Nav.Link href="/loginsecond">Login</Nav.Link>
                  
                  {/* <Nav.Link><button style={{backgroundcolor:'none'}}>Login</button></Nav.Link> */}
                 
                 
                    {/* <Nav.Link href="/VoiceSearchBar"><span className='mdlogo'><FaMicrophone /></span></Nav.Link> */}
                    {/* nitification div */}
                  {/* <Nav.Link><div className="App"> */}
                  {/* <Notifications /> */}
                    {/* <button onClick={buttonOnClick} className="bgremo">
                      <span className='mdlogo'><MdNotificationsActive /></span>
                    </button> */}
                  {/* </div></Nav.Link> */}
                  {/* <Nav.Link><div id="google_translate_element" className='google'></div></Nav.Link> */}

                  <Nav.Link href="/Procedure" className='help_icon'><i className='fa fa-question-circle'></i></Nav.Link>
                  {/* <Nav.Link href="/PublicPlaceProcedure" className='help_icon'>Public Place Help</Nav.Link> */}
                  {/* <Nav.Link className={splitLocation[1] === "Language" ? "active" : ""} eventKey={2} href="/Language">
                  Language
                  </Nav.Link> */}

                </Nav>
              </Navbar.Collapse>
              {/* <div id="google_translate_element" ></div> */}

              {/* userCode return deta */}
              <Menu className="brshadow" menuButton={<MenuButton className="btnbgremo"><AccountCircleIcon /></MenuButton>} transition>
          <MenuItem className="brshadow">New File</MenuItem>
          
          <button style={{border:"0px",background:"white"}}> <MenuItem className="brshadow" onClick={handleShow} >Profile</MenuItem></button>
            
           {show?(
            <Container >
            <div>
            <Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Button style={{backgroundColor: "white", color: 'black', border: 'none' }} onClick={handleClose}><BiArrowBack /></Button>  My Profile
                </Modal.Header>
                {/* <ModalHeader toggle={() => setmodal(!modal)}>
                    <Button style={{ backgroundColor: "white", color: 'black', border: 'none' }} onClick={handleClose}><BiArrowBack /></Button>  My Profile
                </ModalHeader>
                 */}
                {/* <ModalHeader toggle={() => setmodal(!modal)} closeButton>
                    <Button style={{ backgroundColor: "white", color: 'black', border: 'none' }} onClick={handleClose}><BiArrowBack /></Button>  My Profile
                </ModalHeader> */}

                <Modal.Body>

                    <form className="form1">

                        <p className="p" ><b>{profileInfo.emailId}</b></p>

                        <img src={p} id="i" style={{ borderRadius: "50%", width: "200px",height:"200px" }} alt="" ></img>

                        <button className="btn1" onClick={Handledelete}><MdDelete /></button><br></br>
                        <div>
                        <label>Change Profile  </label> 
                           <label htmlFor="imgs"><MdModeEditOutline/></label>
                            <input style={{display:'none'}} id="imgs" type="file" onChange={imageHandler}  accept="image/*"/>   
                        </div>
                       <br></br>

                        <label>System Profile</label> <button style={{ border: "none", backgroundColor: "white" }}> <IoIosColorPalette /></button><br></br><br></br>

                        <h3 style={{ color: "purple" }}>{name}</h3><br></br>

                        <p>Number of Points : {nop}</p>
                        <p>Number of Helps : {noh}</p>

                    </form>
                </Modal.Body>
            </Modal>
            {/* <Button className="btn mt-4" onClick={() => setmodal(true)}>Click Me</Button> */}
            </Container>
        </div>
            </Container>):""
}
            <MenuItem className="brshadow">My Account</MenuItem>
            <MenuItem className="brshadow">Save</MenuItem>
            <MenuItem className="brshadow"><button className="darkmode" onClick={() => themeToggler()} >
                      {theme === 'light' ? <div > <abbr title="Light Theme" className='dotremo' ><FaSun /><span className='textspace ms-2'>Light Theme </span> </abbr>
                      </div> : <div> <abbr title="Dark Theme" className='dotremo' ><FaMoon /><span className='textspace ms-2'>Dark Theme </span> </abbr> </div>}
                    </button></MenuItem>
            <MenuItem className="brshadow">Send Feedback</MenuItem>
            <MenuItem className="brshadow">Setting</MenuItem>
            <MenuItem className="brshadow"> <NavLink to="/privacypolicy" className="submenu">Privacy_Policy</NavLink> </MenuItem>
            <MenuItem className="brshadow"><NavLink to="/termscondition" className="submenu">Terms_Condition</NavLink> </MenuItem>
            <MenuItem className="brshadow">Logout</MenuItem>
			<SubMenu label="Help" >
            <MenuItem className="brshadow"><NavLink to="/PlacedetailsStep1" className="submenu">Place Details</NavLink></MenuItem>
            <MenuItem className="brshadow"><NavLink to="/BusinessStep2" className="submenu">Nature of Business</NavLink></MenuItem>
            <MenuItem className="brshadow"><NavLink to="/PlaceAvaiStep3" className="submenu">Place Availibility</NavLink></MenuItem>
            <MenuItem className="brshadow"><NavLink to="/ImageUpStep5" className="submenu">Image Upload</NavLink></MenuItem>
        </SubMenu> 
        </Menu>
                    
            </Container>
          </Navbar>
        </header>
      </StyledApp>
    </ThemeProvider>

  )
}

