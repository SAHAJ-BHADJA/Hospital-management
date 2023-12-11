import React from 'react';
import logo from '../pics/pics/logo-removebg-preview.png';
import './DetailDetails.css';
import { Link } from "react-router-dom";

const DetailDetails = () => {
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
        "requestId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a15d",
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
        "requestId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12b18d",
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
  return (
    <div>
        <nav>
                <img className='symbol' src={logo} alt='logo'/>
            <div className='space item'></div>
            <div className='logout item'><button >Log Out</button></div>
        </nav>
        <div>
          {/* {data.map((item,index) => {
            if(item.requestId==="a1s2c932-2f70-3ds3-a3b5-2sfd46b12b18d"){
              return (
                <div  key={index+1}>
                    <div >RequestId: {item.requestId}</div>
                    <div >Timestamp: {item.timestamp}</div>
                    <div >Consent From : {item.hiRequest.dateRange.from}</div>
                    <div >Consent To : {item.hiRequest.dateRange.to}</div>
                    <div >Crypto Algo Used : {item.hiRequest.keyMaterial.cryptoAlg}</div>
                    <div >Crypt Key Expiry: {item.hiRequest.keyMaterial.dhPublicKey.expiry}</div>
                </div>
              );
            }
            else{
              return (
                <div>
                  No Records Found
                </div>
              );
            }
          })} */}
          {data.map((item) => {
            if(item.requestId==='a1s2c932-2f70-3ds3-a3b5-2sfd46b12b18d'){
              // itemPresent = true;
              return (
                <div className='logs-container'>
                  <div className='request-title'><h1>Request ID : {item.requestId}</h1><Link to={'/logs'} className='goBackLink'>Go Back</Link></div>
                  <div className='content-detail'>
                    <h2>Basic Request Details</h2>
                    <div className='requestData'>
                      <div className='element'><span className='key'>TransactionId: </span>{item.transactionId}</div>
                      <div className='element'><span className='key'>Timestamp:</span> {item.timestamp}</div>
                      <div className='element'><span className='key'>Consent ID: </span>{item.hiRequest.consent.id}</div>
                      <div className='element'><span className='key'>Consent Valid From :</span> {item.hiRequest.dateRange.from}</div>
                      <div className='element'><span className='key'>Consent Valid Till : </span>{item.hiRequest.dateRange.to}</div>
                      <div className='element'><span className='key'>DataPushUrl:</span> {item.hiRequest.dataPushUrl}</div>
                    </div>
                  </div>
                  <div className='content-detail'>
                    <h2>Encryption Details</h2>
                    <div className='requestData'>
                      <div className='element'><span className='key'>Crypto Algo Used : </span>{item.hiRequest.keyMaterial.cryptoAlg}</div>
                      <div className='element'><span className='key'>Curve Used : </span>{item.hiRequest.keyMaterial.curve}</div>
                      <div className='element'><span className='key'>Crypt Key Expiry: </span>{item.hiRequest.keyMaterial.dhPublicKey.expiry}</div>
                      <div className='element'><span className='key'>DH Public Key Used : </span>{item.hiRequest.keyMaterial.dhPublicKey.parameters}</div>
                      <div className='element'><span className='key'> Key Value Used : </span>{item.hiRequest.keyMaterial.dhPublicKey.keyValue}</div>
                      <div className='element'> <span className='key'>Nonce Used : </span>{item.hiRequest.keyMaterial.nonce}</div>
                    </div>
                  </div>
                  
                </div>
              );
            }
          })} 

          {/* {
            console.log(props)
          } */}

        </div>
    </div>
  )
}

export default DetailDetails




