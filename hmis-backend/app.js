import express from "express";
import cors from 'cors';
import { config } from "dotenv"
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { getMyProfile, getUserConsent, login, logout, register } from "./controllers/doctor.js";
// import { getMyProfileR, loginR, logoutR, registerR } from "./controllers/receptionist.js";
// import { isDoctorAuthenticated } from "./middlewares/auth.js";
// import { isReceptionistAuthenticated } from "./middlewares/auth.js"

const app = express();

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

config({
    path: "./data/config.env"
})

app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGO_URI, {
    dbName: "backend",
    useNewUrlParser: true,
    useUnifiedTopology: true,
},)
    .then(() => { console.log("db connected") })
    .catch((e) => { console.log(e) });

app.listen(5000, () => {
    console.log("Server is working");
})

app.post("/new", register);
app.post("/login", login);
app.get("/me", getMyProfile);
app.post("/get-userConsent",getUserConsent);
app.get("/logout", logout);

// app.post("/receptionist/newR", registerR);
// app.post("/receptionist/loginR", loginR);
// app.get("/receptionist/meR", isReceptionistAuthenticated, getMyProfileR);
// app.get("/receptionist/logoutR", logoutR);