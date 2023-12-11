import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import logo from "../pics/pics/logo-removebg-preview.png";
import './Appointment.css'
// import data from "./Data.json"

const Appointment = () => {
  const [book, setBook] = useState();

  let PatientData = `[
        {"HID": "1", "Name": "Dev Pithadia", "MobileNo": "7016105036"},
        {"HID": "2", "Name": "Pulak Jain", "MobileNo": "9856784536"},
        {"HID": "3", "Name": "Samarth Pradhan", "MobileNo": "8793427564"},
        {"HID": "4", "Name": "Vishwa Gajjar", "MobileNo": "7860990453"},
        {"HID": "5", "Name": "Sahil Anand", "MobileNo": "6789057689"}
      ]`;

  let AppointmentData = `[
        {"HID": "1", "Name": "Dev Pithadia", "MobileNo": "7016105036", "DoctorName": "Dr. Samarth", "Date": "19/06/2023", "Time": "10:00"},
        {"HID": "1", "Name": "Dev Pithadia", "MobileNo": "7016105036", "DoctorName": "Dr. Sahil", "Date": "19/06/2023", "Time": "12:00"},
        {"HID": "1", "Name": "Dev Pithadia", "MobileNo": "7016105036", "DoctorName": "Dr. Vishwa", "Date": "19/06/2023", "Time": "13:30"},
        {"HID": "2", "Name": "Pulak Jain", "MobileNo": "9856784536", "DoctorName": "Dr. Samarth", "Date": "19/06/2023", "Time": "15:15"},
        {"HID": "2", "Name": "Pulak Jain", "MobileNo": "9856784536", "DoctorName": "Dr. Sahil", "Date": "19/06/2023", "Time": "18:00"}
      ]`;

  let data = JSON.parse(PatientData);
  let aData = JSON.parse(AppointmentData);

  function searchPatient() {
    let input = document.getElementById("searchbar").value;
    // input = input.toLowerCase();
    let x = document.querySelector("#list-holder");
    x.innerHTML = "";

    let y = document.querySelector("#appointments");
    y.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
      let obj = data[i];

      if (obj.MobileNo.toLowerCase().includes(input)) {
        const elem = document.createElement("div");
        elem.innerHTML = `<div class="patientDataRow"><span class='key'>Hospital ID :</span>  ${obj.HID}  <span class='key'>Patient Name: </span>${obj.Name}   <span class='key'> Patient Mobile No. : </span>${obj.MobileNo}  </div>`;
        x.appendChild(elem);
      }
    }

      const elem = document.createElement("div");
      elem.innerHTML =
      `<div class="appointmentDataRow rowHeading"><span class='key'>Doctor Name</span>    <span class='key'>Appointment Date </span>   <span class='key'> Mobile Number </span>  <span class='key'>Cancel Appointment</span></div>`;
      y.appendChild(elem);


    for (let i = 0; i < aData.length; i++) {
      let obj = aData[i];

      if (obj.MobileNo.toLowerCase().includes(input)) {
        const elem = document.createElement("div");
        elem.innerHTML =
        `<div class="appointmentDataRow"><span >${obj.DoctorName}</span>    <span >${obj.Date} </span>   <span > ${obj.MobileNo} </span>  <span ><button>cancel</button></span></div>`;
        y.appendChild(elem);
      }
    }
  }

  function bookAppointment() {
    setBook(true);
  }

  if (book) {
    return <Navigate to={"/book-appointment"} />;
  }

  return (
    <>
      <nav>
				<img className='symbol' src={logo} alt='logo' />
				<h1 className='title'>Book Appointment</h1>
				<button className='logoutbtn'>Log Out</button>
			</nav>

      {/* <ul id="list-holder">

                </ul> */}

      <div className="main-content-container">
        <div className="left-bar">
          <ul className="unorder-list">
            <li>
              <Link to={"/create-id"} className="link">
                Create Abha ID
              </Link>
            </li>
            <li>
              <Link to={"/logs"} className="link">
                View Logs
              </Link>
            </li>
            <li>
              <Link to={"/availability"} className="link">
                Check availability
              </Link>
            </li>
            <li>
              <Link to={"/appointment"} className="link current">
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
        <div className="right-bar" id="right-bar">
          <h1 className="heading">View And Book Appointment</h1>
          <div className="searchBoxContainer">
            <h4>Search Appointments of Patient</h4>
            <div className="searchBox">
            <input
              id="searchbar"
              placeholder="Enter Mobile Number "
              type="text"
              name="search"
            />
            <button onClick={searchPatient} className="patientAppointmentSearchButton">Submit</button>
            </div>
          </div>
            <div className="patientDetailThroughSearch">
                <div className="titleAndButton">
                    <h2>Patients Details</h2>
                    <div><button onClick={bookAppointment}>Book New Appointment</button></div>
                </div>
                <div id="list-holder"></div>
            </div>
            <div className="patientAppointmentListContainer">
                <h2>View Appointments</h2>
                <div id="appointments"></div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
