

// Not Used Anymore


import { Receptionist } from "../models/receptionist.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";

export const registerR = async (req, res) => {
    const { id, name, phoneNumber, email, role, password, cPassword } = req.body;

    let user = await Receptionist.findOne({ email })

    if (user) return res.status(404).json({
        success: false,
        message: "User already exists",
    })

    const hashesPassword = await bcrypt.hash(password, 10);

    if (password === cPassword) {
        user = await Receptionist.create({ id, name, phoneNumber, email, role, password: hashesPassword });
    }
    else {
        return res.status(404).json({
            success: false,
            message: "Password doesn't match",
        })
    }

    sendCookie(user, res, "Registered Successfully", 201);
};

export const loginR = async (req, res, next) => {

    const { email, password } = req.body;
    const user = await Receptionist.findOne({ email }).select("+password");

    if (!user) return res.status(404).json({
        success: false,
        message: "Invalid email or password",
    })
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(404).json({
        success: false,
        message: "Invalid email or password",
    });

    sendCookie(user, res, `Welcome back ${user.name}`, 200);

};

export const getMyProfileR = (req, res) => {

    res.status(200).json({
        success: true,
        user: req.user,
    });
};

export const logoutR = (req, res) => {

    res.status(200)
        .cookie("token", "", { expires: new Date(Date.now()) })
        .json({
            success: true,
            user: req.user,
        });
};