import React, { useState } from 'react';
import './login.css';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import logo from '../pics/pics/logo-removebg-preview.png';

let tempRole;
const defaultTheme = createTheme();

const Register = () => {
    const [userRegistration, setuserRegistration] = useState({
        role: '',
        username: '',
        email: '',
        password: '',
        cpassword: ''
    });

    var state = false;
    const toggle = () => {
        console.log(document.getElementById('password').getAttribute('type'));
        if (document.getElementById('password').getAttribute('type') === "text") {
            document.getElementById('password').setAttribute("type", "password");
        }
        else { document.getElementById('password').setAttribute("type", "text"); }
    }

    const [records, setRecords] = useState([]);
    const [regSuccess, setRegSuccess] = useState();

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === 'password') {
            var passClass = document.getElementsByClassName('password-check')
            let smallCase = /[a-z]/
            let capitalCase = /[A-Z]/
            let digit = /\d/
            let special = /[@$!%*?&]/
            let minLen = value.split(' ').join('').length

            if (smallCase.test(value)) {
                passClass[0].style.color = "green";
            }
            else {
                passClass[0].style.color = "red";
            }

            if (capitalCase.test(value)) {
                passClass[1].style.color = "green";
            }
            else {
                passClass[1].style.color = "red";
            }

            if (digit.test(value)) {
                passClass[2].style.color = "green";
            }
            else {
                passClass[2].style.color = "red";
            }

            if (special.test(value)) {
                passClass[3].style.color = "green";
            }
            else {
                passClass[3].style.color = "red";
            }

            if (minLen >= 8) {
                passClass[4].style.color = "green";
            }
            else {
                passClass[4].style.color = "red";
            }


        }
        console.log(name, value);
        setuserRegistration({ ...userRegistration, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newRecord = { ...userRegistration, id: new Date().getTime().toString() }
        console.log(records);
        setRecords([...records, newRecord]);
        console.log(records);

        console.log(newRecord, newRecord.role);

        try {
            const msgd = await axios.post("http://localhost:5000/new", newRecord, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                },
                withCredentials: true,
            }
            );

            console.log(msgd);

            setRegSuccess(msgd.data.success);

            toast.success(msgd.data.message);

            console.log(regSuccess);

        }
        catch (er) {
            toast.error("Some Error.")
            console.log(er);
        }

        setuserRegistration({
            role: '',
            username: '',
            email: '',
            password: '',
            cpassword: ''
        });
    }

    if (regSuccess) {
        console.log("Calling navigate tag");
        return <Navigate to={'/'} />
    }
    return (
        <ThemeProvider theme={defaultTheme}>
            <div className="center-container">
                <form onSubmit={handleSubmit}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                            className="main-container"
                        >
                            <img src={logo} alt="Logo" style={{ width: '90px', height: 'auto' }} />
                            <h1>Register</h1>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Please select the role *</InputLabel>
                                    <Select
                                        required
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={userRegistration.role}
                                        label="Please select the role *"
                                        onChange={handleInput}
                                        name="role"
                                    >
                                        <MenuItem value="doctor">Doctor</MenuItem>
                                        <MenuItem value="receptionist">Receptionist</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Enter Your name"
                                    autoFocus
                                    value={userRegistration.username}
                                    onChange={handleInput}
                                    autoComplete='off'
                                    name='username'
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Enter Your email id"
                                    autoFocus
                                    value={userRegistration.email}
                                    onChange={handleInput}
                                    autoComplete='off'
                                    name='email'
                                />
                                <TextField
                                    value={userRegistration.password}
                                    onChange={handleInput}
                                    autoComplete='off'
                                    name='password'
                                    placeholder='Password'
                                    id="password"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Password"
                                    type="password"
                                />
                                <TextField
                                    value={userRegistration.cpassword}
                                    onChange={handleInput}
                                    autoComplete='off'
                                    name='cpassword'
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Confirm Password"
                                    type="password"
                                />
                                <Button
                                    className='input-box'
                                    id='submit-button'
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    value='Register'
                                >
                                    Register
                                </Button>
                                <div class="checkList" style={{ textAlign: "center"}}>
                                    <p>
                                        <label class="password-check">A lower case</label><br></br>
                                        <label class="password-check">An upper case</label><br></br>
                                        <label class="password-check">A numerical character</label><br></br>
                                        <label class="password-check">A special character</label><br></br>
                                        <label class="password-check">8 Characters</label><br></br>
                                    </p>
                                </div>
                                <div className='otherDivider'>
                                    <hr className='marks' />
                                    <span className='or'>OR</span>
                                    <hr className='marks' />
                                </div>
                                <p>Already have an account ? <Link to="/">Login</Link></p>
                            </Box>
                        </Box>
                    </Container>
                </form>
            </div>
        </ThemeProvider>
    );
};
export default Register;
