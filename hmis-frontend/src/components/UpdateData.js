import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#A0AAB4',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'black',
        },
        '&:hover fieldset': {
            borderColor: '#B2BAC2',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#6F7E8C',
        },
    },
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function UpdateData() {
    const [value, setValue] = React.useState(0);
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear authentication token (example using localStorage)
        localStorage.removeItem('authToken');
        // Reset user session or other relevant data (example using sessionStorage)
        sessionStorage.clear();
        // Redirect the user to the login page
        navigate('/');
    };

    const handleChange = (event, newValue) => {
        setAuth(event.target.checked);
        setValue(newValue);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDashboardClick = () => {
        navigate('/doctor-dashboard');
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        // setConsentInformation({ ...consentInformation, [name]: value });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <LocalHospitalIcon sx={{ m: 2, fontSize: 50 }} />
                        <Typography variant="h3" component="div" sx={{ flexGrow: 1, m: 2 }}>
                            Update Patient Data
                        </Typography>
                        <Button variant="contained" color="primary" onClick={handleDashboardClick} sx={{ m: 2 }} startIcon={<GridViewRoundedIcon />}>Go to Dashboard</Button>
                        {auth && (
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle sx={{ m: 1, fontSize: 50 }} />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{ width: '90%', m: '5%', p: 5, align: 'center', borderRadius: 2, boxShadow: 5 }}>
                <Box component="form" display="flex" justifyContent="center" sx={{ '& .MuiTextField-root': { m: 2, width: '80%' } }}>
                    <FormControl sx={{ m: 5, width: '50%' }} variant="outlined">
                        <CssTextField
                            label="Patient ID"
                            id="patient-id"
                            name='patientId'
                            onChange={handleInput}
                        />
                        <CssTextField
                            // label="Date"
                            type="date"
                            id="dateEndRange"
                            name='dateEndRange'
                            onChange={handleInput}
                        />
                    </FormControl>
                </Box>
                <Box justifyContent="center" sx={{ width: '70%', align: 'center' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                            <Tab label="Upload" {...a11yProps(0)} />
                            <Tab label="Add Prescription" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        Upload
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Prescribe
                    </TabPanel>
                </Box>
            </Box>
        </ThemeProvider>
    )
}
