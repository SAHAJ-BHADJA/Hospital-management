import { Doctor } from "../models/doctor.js";
import { Receptionist } from "../models/receptionist.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
import jwt from "jsonwebtoken";
import {v4} from 'uuid';
import axios from 'axios';


export const register = async (req, res) => {
    const { id, username, email, role, password, cpassword } = req.body;

    let user;

    if (role === "doctor") {
        user = await Doctor.findOne({ email })
    }
    else {
        user = await Receptionist.findOne({ email })
    }

    if (user) return res.status(404).json({
        success: false,
        message: "User already exists",
    })


    const hashesPassword = await bcrypt.hash(password, 10);

    console.log(password, cpassword);

    if (password === cpassword) {
        if (role === "doctor") {
            user = await Doctor.create({ id, username, email, role, password: hashesPassword });
        }
        else {
            user = await Receptionist.create({ id, username, email, role, password: hashesPassword });
        }
    }
    else {
        return res.status(404).json({
            success: false,
            message: "Password doesn't match",
        })
    }



    sendCookie(user, res, "Registered Successfully", 0, 201);
};

export const login = async (req, res) => {

    const { token } = req.cookies;
    const { email, role, password } = req.body;

    if (token) return res.json({
        success: false,
        message: "Already logged in!",
    });

    let user;
    if (role === "doctor") {
        user = await Doctor.findOne({ email }).select("+password");
    }
    else {
        user = await Receptionist.findOne({ email }).select("+password");
    }

    if (!user) return res.status(404).json({
        success: false,
        message: "Invalid email or password",
    })
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(404).json({
        success: false,
        message: "Invalid email or password",
    });

    console.log(`Welcome back ${user.role} ${user.username}`)

    sendCookie(user, res, `Welcome back ${user.username}`, 15 * 60 * 1000, 200);

};

export const getMyProfile = async (req, res) => {

    const { token } = req.cookies;

    console.log(token)

    if (!token) return res.status(404).json({
        success: false,
        message: "Login First",
    });

    let decoded = jwt.verify(token, process.env.JWT_SECRET);

    // req.user = await Doctor.findById(decoded._id);
    if (decoded.role === "doctor") {
        req.user = await Doctor.findById(decoded._id);
    }
    else {
        req.user = await Receptionist.findById(decoded._id);
    }

    console.log('hello you are in getMyProfile........')
    res.status(200).json({
        success: true,
        user: req.user,
    });
};

const authBody = {
  "clientId": "SBX_003386",
  "clientSecret": "2ec7e9a2-f280-45e6-b12d-b7536a17a4df",
  "grantType": "client_credentials"
}
const authHeader = {
    'Content-Type': 'application/json',
}
const generateToken = async () => {
    const response = await axios.post('https://dev.abdm.gov.in/gateway/v0.5/sessions', authBody, authHeader)
    // console.log(response.data.accessToken)
    return response.data.accessToken;
}

const registerHRPHOST = async (Token) => {

  const authToken = Token;
  
  const hrpBody = {
    url: "https://eooybeuyskk8hnc.m.pipedream.net",
  };

  const hrpHeaders = {
    Connection: "keep-alive",
    "Content-Type": "application/json",
    Authorization: "Bearer " + authToken,
    "Accept-Language": "en-US",
    Accept: "*/*",
  };
  try {
    const response = await axios.patch(
      "https://dev.abdm.gov.in/devservice/v1/bridges",
      hrpBody,
      { headers: hrpHeaders }
    );
    console.log("HRP Host registered Successfully..");
  } catch (er) {
    console.log("some error ............");
  }
};

export const getUserConsent =async(req,res) =>{

    const info = req.body;

    console.log(info);

    const authToken = await generateToken();

    await registerHRPHOST(authToken);

    const timestamp = (new Date()).toISOString();

    const data = JSON.stringify({
        "requestId": v4(),
        "timestamp": timestamp,
        "consent": {
          "purpose": {
            "text": info.purpose,
            "code": "CAREMGT"
          },
          "patient": {
            "id": info.patientId
          },
          "hiu": {
            "id": info.hiuId
          },
          "requester": {
            "name": info.doctorName,
            "identifier": {
              "type": "REGNO",
              "value": info.doctorId,
              "system": "https://www.mciindia.org"
            }
          },
          "hiTypes": [
            "OPConsultation",
          ],
          "permission": {
            "accessMode": "VIEW",
            "dateRange": {
              "from": info.dateStartRange+'T12:52:34.925Z',
              "to": info.dateEndRange+'T12:52:34.925Z'
            },
            "dataEraseAt": "2023-07-01T12:52:34.925Z",
            "frequency": {
              "unit": "HOUR",
              "value": 1,
              "repeats": 0
            }
          }
        }
      });
    
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://dev.abdm.gov.in/gateway/v0.5/consent-requests/init',
      headers: { 
        'Authorization': 'Bearer '+authToken, 
        'X-CM-ID': 'sbx', 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios.request(config)
    .then((response) => {
      console.log("Consent Send Successfully.....");
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

    res.status(200).json({
        success: true,
    });
}

export const logout = (req, res) => {

    res.status(200)
        .cookie("token", "", { expires: new Date(Date.now()) })
        .json({
            success: true,
            user: req.user,
        });
};