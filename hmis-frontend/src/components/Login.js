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

const Login = () => {
  const [userRegistration, setuserRegistration] = useState({
    role: '',
    email: '',
    password: ''
  });

  var state = false;
  const toggle = () => {
    console.log(document.getElementById('password').getAttribute('type'));
    if (document.getElementById('password').getAttribute('type') === "text") {
      document.getElementById('password').setAttribute("type", "password");
    } else {
      document.getElementById('password').setAttribute("type", "text");
    }
  };

  const [isAuthenticated, setIsAuthenticate] = useState();
  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setuserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = async (e) => {
    // console.log(userRegistration);
    e.preventDefault();
    const newRecord = { ...userRegistration };
    console.log(records);
    setRecords([...records, newRecord]);
    console.log(records);

    console.log(newRecord, newRecord.role);

    tempRole = newRecord.role;

    try {
      const msg = await axios.post("http://localhost:5000/login", newRecord, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        },
        withCredentials: true,
      });
      // console.log(msg.data.success);
      console.log(msg);
      setIsAuthenticate(msg.data.success);

      if (!isAuthenticated) {
        toast(msg.data.message);
      } else {
        toast.success(msg.data.message);
      }

    } catch (er) {
      toast.error("Some Error.");
      console.log(er);
    }
    setuserRegistration({
      role: '',
      email: '',
      password: ''
    });
  };

  if (isAuthenticated && tempRole === 'doctor') {
    // console.log("You Have successfully logged in");
    return <Navigate to={"/doctor-Dashboard"} />;
  } else if (isAuthenticated && tempRole === 'receptionist') {
    return <Navigate to={"/receptionist-Dashboard"} />;
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
              <h1>Sign In</h1>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Please select the role</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={userRegistration.role}
                    label="Please select the role..."
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
                  label="Email"
                  autoFocus
                  value={userRegistration.email}
                  onChange={handleInput}
                  autoComplete='off'
                  name='email'
                  placeholder='Enter Your Email Id'
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
                <Button
                  className='input-box'
                  id='submit-button'
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  value='Login'
                >
                  Submit
                </Button>
                <div className='otherDivider'>
                  <hr className='marks' />
                  <span className='or'>OR</span>
                  <hr className='marks' />
                </div>
                <p>Don't have an account? <Link to="/register">Register</Link></p>
              </Box>
            </Box>
          </Container>
        </form>
      </div>
    </ThemeProvider>
  );
};

export default Login;
