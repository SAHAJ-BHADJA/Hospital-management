import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import logo from "../pics/pics/logo-removebg-preview.png";
import './DocDash.css';

const BookAppointment = () => {

  const [clickSubmit,setClickSubmit] = useState(false);
  const [clickCancel,setClickCancel] = useState(false);

  const handleSubmit=async(e)=>{
    e.preventDefault();
    setClickSubmit(true);
    console.log("Trying to navigate to appointment page")
  }

  if(clickSubmit || clickCancel){
    console.log("Trying to navigate to appointment page")
    return <Navigate to={'/appointment'} />
  }
  return (
    <>
      <nav>
				<img className='symbol' src={logo} alt='logo' />
				<h1 className='title'>Book Appointment</h1>
				<button className='logoutbtn'>Log Out</button>
			</nav>
      <center style={{marginTop:'8vh'}}>
        <h1>Book Appointment</h1>
        <form>
          <h3>Patient Details</h3>
          <input
            type="text"
            name="HID"
            placeholder="Enter Your Health ID"
            id="HID"
            className="input-box"
          />
          <input
            type="text"
            name="name"
            placeholder="Enter Your Full Name"
            id="name"
            className="input-box"
          />
          <input
            type="number"
            name="age"
            placeholder="Enter Your Age"
            id="age"
            className="input-box"
          />
          <input
            type="number"
            name="phoneNo"
            placeholder="Enter Your Mobile Number"
            id="phoneNo"
            className="input-box"
          />
          <h3>Appointment Details</h3>
          <input
            type="text"
            name="dname"
            placeholder="Enter Doctor's name"
            id="dname"
            className="input-box"
          />
          <input
            type="date"
            name="appointmentdate"
            placeholder="Enter Date"
            id="appointmentdate"
            className="input-box"
          />
          <input
            type="time"
            name="appointmenttime"
            placeholder="Enter Time"
            id="appointmenttime"
            className="input-box"
          />
          <input type="submit" className="input-box" id="submit-button" onClick={handleSubmit} />
          <input type="submit" className="input-box" value='Cancel' id="submit-button" onClick={handleSubmit} />
          {/* <button className="input-box" id="submit-button" onClick={()=>{setClickCancel(true)}} ></button> */}
        </form>
      </center>
    </>
  );
};

export default BookAppointment;
