import jwt from "jsonwebtoken";
import { Doctor } from "../models/doctor.js";
import { Receptionist } from "../models/receptionist.js";

export const isDoctorAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) return res.status(404).json({
        success: false,
        message: "Login First",
    });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await Doctor.findById(decoded._id);
    next();
}

export const isReceptionistAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) return res.status(404).json({
        success: false,
        message: "Login First",
    });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await Receptionist.findById(decoded._id);
    next();
}