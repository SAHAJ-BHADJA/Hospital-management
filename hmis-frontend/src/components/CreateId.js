import './DocDash.css';
import { Link } from "react-router-dom";
// import axios from 'axios';
import React,{ useState} from 'react';
// import { Navigate } from "react-router-dom";
import './DocDash.css';
import logo from '../pics/pics/logo-removebg-preview.png'

const CreateId = () => {
    // const [data, setData] = useState();

    const handleClick = async () =>{
    //   try{
    //       const response = await axios.get("http://localhost:5000/logout",{
    //           headers:{
    //             "Content-Type":"application/json"
    //           },
    //           withCredentials:true,}
    //           );
    //         setData(response.data.success);
    //       } catch (error) {
    //         console.log('Error fetching data:', error);
    //   }
    }
    
    // if(data){
    //   return <Navigate to={'/'}/>
    // }

    const [patientId, setPatientId] = useState('');
    const [date, setDate] = useState('');
    const [activeTab, setActiveTab] = useState('upload');
    const [uploadedDocument, setUploadedDocument] = useState(null);
    const [prescriptionText, setPrescriptionText] = useState('');
  
    const handlePatientIdChange = (event) => {
      setPatientId(event.target.value);
    };
  
    const handleDateChange = (event) => {
      setDate(event.target.value);
    };
  
    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };
  
    const handleDocumentUpload = (event) => {
      const file = event.target.files[0];
      setUploadedDocument(file);
    };
  
    const handlePrescriptionTextChange = (event) => {
      setPrescriptionText(event.target.value);
    };
  
    const handleUpdateDetails = () => {
      // Perform update details logic here
      console.log('Updating details:', patientId, date);
      console.log('Uploaded document:', uploadedDocument);
      console.log('Prescription text:', prescriptionText);
    };

    return (
        <div>
            <nav>
                <img className='symbol' src={logo} alt='logo'/>
                <h1 className='title'>Create Abha ID</h1>
                <button className='logoutbtn' onClick={handleClick}>Log Out</button>
            </nav>
            <div className='container'>
				<div className='tabs'>
					<div class="tab">
						<button className={activeTab === 'upload' ? 'active' : ''} onClick={() => handleTabChange('upload')}>Using Mobile No.</button>
						<button className={activeTab === 'add' ? 'active' : ''} onClick={() => handleTabChange('add')}>Using Adhaar No. </button>
					</div>
					<div className="tab-content">
						{activeTab === 'upload' && (
							<div>
								<label>Enter Mobile No. </label>
						        <input type="text" />
                                <button>Get OTP</button>
                                <label>Enter OTP</label>
						        <input type='text'></input><br></br>
                                <label>Create password</label>
                                <input type='password'></input><br></br>
                                <label>Confirm password</label>
                                <input type='text'></input>
							</div>
						)}
						{activeTab === 'add' && (
							<div>
								<label>Adhaar No. </label>
						        <input type="text" />
                                <label>Name (as per adhaar) </label>
						        <input type="text" />
                                <label>Date of Birth</label>
                                <input type='date'></input><br></br>
                                <label>Create password</label>
                                <input type='password'></input><br></br>
                                <label>Confirm password</label>
                                <input type='text'></input>
							</div>
						)}
					</div>
					
				</div>
				<div>
					<button onClick={handleUpdateDetails}>Create Abha ID</button>
				</div>
				<div>
         				<Link to="/appointment"><button>Cancel</button></Link>
        			</div>
        	</div>
		</div>
    )
}

export default CreateId;
