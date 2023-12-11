import React,{ useState} from 'react';
import axios from 'axios';
import { Navigate } from "react-router-dom";
import './DocDash.css';
import logo from '../pics/pics/logo-removebg-preview.png'

const RecDash = () => {
  const [data, setData] = useState();

  const handleClick = async () =>{
    try{
        const response = await axios.get("http://localhost:5000/logout",{
            headers:{
              "Content-Type":"application/json"
            },
            withCredentials:true,}
            );
          setData(response.data.success);
        } catch (error) {
          console.log('Error fetching data:', error);
    }
  }
  
  if(data){
    return <Navigate to={'/'}/>
  }

  return (
    <div>
        <nav>
            <div className='symbol item'>
                <img src={logo} alt='logo'/>
            </div>
            <div className='space item'></div>
            <div className='logout item'><button onClick={handleClick}>Log Out</button></div>
        </nav>
        <p>This is Receptionist Dashboard Page.</p>
    </div>
  )
}

export default RecDash;


