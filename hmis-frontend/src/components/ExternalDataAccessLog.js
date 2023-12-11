import React,{useState} from 'react';
import './DocDash.css';
import logo from '../pics/pics/logo-removebg-preview.png';
import '../components/ExternalDataAccessLog.css';
import { Link, Navigate } from "react-router-dom";

const ExternalDataAccessLog = () => {

  const [clickUsed, setClick] =useState(false);
  // const [dataToBeTransfer,setDataToBeTransfer]=useState();

  const data = [
    {
        "requestId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
        "timestamp": "2023-06-17T15:20:43.658Z",
        "transactionId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
        "hiRequest": {
          "consent": {
            "id": "string"
          },
          "dateRange": {
            "from": "2023-06-17T15:20:43.658Z",
            "to": "2023-06-17T15:20:43.658Z"
          },
          "dataPushUrl": "string",
          "keyMaterial": {
            "cryptoAlg": "ECDH",
            "curve": "Curve25519",
            "dhPublicKey": {
              "expiry": "2023-06-17T15:20:43.658Z",
              "parameters": "Curve25519/32byte random key",
              "keyValue": "string"
            },
            "nonce": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
          }
        }
      },
      {
        "requestId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
        "timestamp": "2023-06-17T15:20:43.658Z",
        "transactionId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
        "hiRequest": {
          "consent": {
            "id": "string"
          },
          "dateRange": {
            "from": "2023-06-17T15:20:43.658Z",
            "to": "2023-06-17T15:20:43.658Z"
          },
          "dataPushUrl": "string",
          "keyMaterial": {
            "cryptoAlg": "ECDH",
            "curve": "Curve25519",
            "dhPublicKey": {
              "expiry": "2023-06-17T15:20:43.658Z",
              "parameters": "Curve25519/32byte random key",
              "keyValue": "string"
            },
            "nonce": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
          }
        }
      },
      {
        "requestId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
        "timestamp": "2023-06-17T15:20:43.658Z",
        "transactionId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
        "hiRequest": {
          "consent": {
            "id": "string"
          },
          "dateRange": {
            "from": "2023-06-17T15:20:43.658Z",
            "to": "2023-06-17T15:20:43.658Z"
          },
          "dataPushUrl": "string",
          "keyMaterial": {
            "cryptoAlg": "ECDH",
            "curve": "Curve25519",
            "dhPublicKey": {
              "expiry": "2023-06-17T15:20:43.658Z",
              "parameters": "Curve25519/32byte random key",
              "keyValue": "string"
            },
            "nonce": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
          }
        }
      },
      {
        "requestId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
        "timestamp": "2023-06-17T15:20:43.658Z",
        "transactionId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
        "hiRequest": {
          "consent": {
            "id": "string"
          },
          "dateRange": {
            "from": "2023-06-17T15:20:43.658Z",
            "to": "2023-06-17T15:20:43.658Z"
          },
          "dataPushUrl": "string",
          "keyMaterial": {
            "cryptoAlg": "ECDH",
            "curve": "Curve25519",
            "dhPublicKey": {
              "expiry": "2023-06-17T15:20:43.658Z",
              "parameters": "Curve25519/32byte random key",
              "keyValue": "string"
            },
            "nonce": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
          }
        }
      },
      {
        "requestId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
        "timestamp": "2023-06-17T15:20:43.658Z",
        "transactionId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
        "hiRequest": {
          "consent": {
            "id": "string"
          },
          "dateRange": {
            "from": "2023-06-17T15:20:43.658Z",
            "to": "2023-06-17T15:20:43.658Z"
          },
          "dataPushUrl": "string",
          "keyMaterial": {
            "cryptoAlg": "ECDH",
            "curve": "Curve25519",
            "dhPublicKey": {
              "expiry": "2023-06-17T15:20:43.658Z",
              "parameters": "Curve25519/32byte random key",
              "keyValue": "string"
            },
            "nonce": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
          }
        }
      },
      {
        "requestId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
        "timestamp": "2023-06-17T15:20:43.658Z",
        "transactionId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
        "hiRequest": {
          "consent": {
            "id": "string"
          },
          "dateRange": {
            "from": "2023-06-17T15:20:43.658Z",
            "to": "2023-06-17T15:20:43.658Z"
          },
          "dataPushUrl": "string",
          "keyMaterial": {
            "cryptoAlg": "ECDH",
            "curve": "Curve25519",
            "dhPublicKey": {
              "expiry": "2023-06-17T15:20:43.658Z",
              "parameters": "Curve25519/32byte random key",
              "keyValue": "string"
            },
            "nonce": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
          }
        }
      },
      {
        "requestId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
        "timestamp": "2023-06-17T15:20:43.658Z",
        "transactionId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
        "hiRequest": {
          "consent": {
            "id": "string"
          },
          "dateRange": {
            "from": "2023-06-17T15:20:43.658Z",
            "to": "2023-06-17T15:20:43.658Z"
          },
          "dataPushUrl": "string",
          "keyMaterial": {
            "cryptoAlg": "ECDH",
            "curve": "Curve25519",
            "dhPublicKey": {
              "expiry": "2023-06-17T15:20:43.658Z",
              "parameters": "Curve25519/32byte random key",
              "keyValue": "string"
            },
            "nonce": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
          }
        }
      },
      {
        "requestId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
        "timestamp": "2023-06-17T15:20:43.658Z",
        "transactionId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
        "hiRequest": {
          "consent": {
            "id": "string"
          },
          "dateRange": {
            "from": "2023-06-17T15:20:43.658Z",
            "to": "2023-06-17T15:20:43.658Z"
          },
          "dataPushUrl": "string",
          "keyMaterial": {
            "cryptoAlg": "ECDH",
            "curve": "Curve25519",
            "dhPublicKey": {
              "expiry": "2023-06-17T15:20:43.658Z",
              "parameters": "Curve25519/32byte random key",
              "keyValue": "string"
            },
            "nonce": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
          }
        }
      },
      {
        "requestId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
        "timestamp": "2023-06-17T15:20:43.658Z",
        "transactionId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
        "hiRequest": {
          "consent": {
            "id": "string"
          },
          "dateRange": {
            "from": "2023-06-17T15:20:43.658Z",
            "to": "2023-06-17T15:20:43.658Z"
          },
          "dataPushUrl": "string",
          "keyMaterial": {
            "cryptoAlg": "ECDH",
            "curve": "Curve25519",
            "dhPublicKey": {
              "expiry": "2023-06-17T15:20:43.658Z",
              "parameters": "Curve25519/32byte random key",
              "keyValue": "string"
            },
            "nonce": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
          }
        }
      }
  ]

  const handleClick = (event, param) => {
    console.log(event);
    console.log(param);
    // return <Navigate to={'/log-details'}/>
    setClick(true);
    // setDataToBeTransfer(param);
    //  <Navigate to={'/'}/>
  };

  if(clickUsed){
    return <Navigate to={'/log-details'} />;
  }

  return (
    <div>
        <nav>
				<img className='symbol' src={logo} alt='logo' />
				<h1 className='title'>Log details</h1>
				<button className='logoutbtn'>Log Out</button>
			  </nav>
        <div className='main-content-container'>
            <div className='left-bar'>
                <ul className='unorder-list'>
                    <li><Link to={'/create-id'} className='link'>Create Abha ID</Link></li>
                    <li><Link to={'/logs'} className='link current'>View Logs</Link></li>
                    <li><Link to={'/availability'} className='link'>Check availability</Link></li>
                    <li><Link to={'/appointment'} className='link'>Book Appointment</Link></li>
                </ul>
            </div>
            <div className='right-bar'>
                <h1 className='heading'>Requests Logs</h1>
                <div className='data-row' >
                    <h3 className='column table-title'>Sr no.</h3>
                    <h3 className='column table-title '>RequestId</h3>
                    <h3 className='column table-title'>Timestamp</h3>
                    <h3 className='column table-title'>View more</h3>
                </div>
                {data.map((item,index) => {
                    return (
                        <div className='data-row' key={index+1}>
                            <div className='column'>{index+1}</div>
                            <div className='column'>{item.requestId}</div>
                            <div className='column'>{item.timestamp}</div>
                            <div className='column'><button onClick={event => handleClick(event, item.requestId)}>View</button></div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>

  )
}

export default ExternalDataAccessLog
