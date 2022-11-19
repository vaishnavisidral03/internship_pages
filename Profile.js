import React, { useState, useRef, setPreviewImage } from "react";
import { Button, Modal, ModalBody, ModalHeader, Row, Col } from 'reactstrap';
import img1 from './images/profile.jpg';
import img2 from './images/edit.jpg';
import './Profile.css';
import { MdDelete } from 'react-icons/md';
import { BiArrowBack } from 'react-icons/bi';
import { IoIosColorPalette, IoIosGlobe } from 'react-icons/io';
import {MdModeEditOutline} from 'react-icons/md';
function Profile() 
{
    const [modal, setmodal] = useState(false);
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
    return (
        <div>
            
            <Modal size='lg' isOpen={modal} toggle={() => setmodal(!modal)}>
                <ModalHeader toggle={() => setmodal(!modal)}>

                    <Button style={{ backgroundColor: "white", color: 'black', border: 'none' }} onClick={() => setmodal(false)}><BiArrowBack /></Button>  My Profile</ModalHeader>

                <ModalBody>

                    <form className="form1">
                        <p className="p" ><b>rushikeshgoli38@gmail.com</b></p>

                        <img src={state} id="i" style={{ borderRadius: "50%", width: "200px",height:"200px" }} alt="" ></img>

                        <button className="btn1" onClick={Handledelete}><MdDelete /></button><br></br>
                        <div>
                        <lable>Change Profile  </lable> 
                           <label htmlFor="imgs"><MdModeEditOutline/></label>
                            <input style={{display:'none'}} id="imgs" type="file" onChange={imageHandler}  accept="image/*"/>   
                        </div>
                       <br></br>

                        <lable>System Profile</lable> <button style={{ border: "none", backgroundColor: "white" }}> <IoIosColorPalette /></button><br></br><br></br>

                        <h3 style={{ color: "purple" }}>Rushikesh Goli</h3><br></br>

                        <p>Number of Points : 11</p>
                        <p>Number of Helps : 5</p>

                    </form>
                </ModalBody>
            </Modal>
            <Button className="btn mt-3" onClick={() => setmodal(true)}>Click Me</Button>
        </div>
    );
  
}
export default Profile;