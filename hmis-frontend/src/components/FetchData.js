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
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import {styled} from '@mui/material/styles';
import TextField from '@mui/material/TextField';
// import dayjs from 'dayjs';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

const steps = ['Patient Data', 'Doctor Data', 'Consent Period'];

const defaultTheme = createTheme();

export default function FetchData() {
	const [auth, setAuth] = React.useState(true);
	const [anchorEl, setAnchorEl] = React.useState(null);

	const [consentInformation, setConsentInformation] = useState({
		patientId: '',
		purpose: '',
		doctorId: '',
		doctorName: '',
		hiuId: '',
		dateStartRange: '',
		dateEndRange: ''
	});

	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		console.log(name, value);
		setConsentInformation({ ...consentInformation, [name]: value });
	};

	const navigate = useNavigate();

	const handleLogout = () => {
		// Clear authentication token (example using localStorage)
		localStorage.removeItem('authToken');
		// Reset user session or other relevant data (example using sessionStorage)
		sessionStorage.clear();
		// Redirect the user to the login page
		navigate('/');
	};

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const [activeStep, setActiveStep] = React.useState(0);
	const [skipped, setSkipped] = React.useState(new Set());

	const isStepSkipped = (step) => {
		return skipped.has(step);
	};

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleSubmit = async (e) => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		e.preventDefault();
		// Perform submit action
		console.log('Form submitted!');
		console.log(consentInformation);

		try {
			const resp = await axios.post("http://localhost:5000/get-userConsent", consentInformation, {
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
				},
				withCredentials: true,
			});
		} catch (er) {
			console.log("Some Error");
		}
		setConsentInformation({
			patientId: '',
			purpose: '',
			doctorId: '',
			doctorName: '',
			hiuId: '',
			dateStartRange: '',
			dateEndRange: ''
		});
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	const handleDashboardClick = () => {
		navigate('/doctor-dashboard');
	}

	const renderStepContent = (step) => {
		// Update with your form fields for each step
		switch (step) {
			case 0:
				return (
					<Box component="form" display="flex" justifyContent="center" sx={{ '& .MuiTextField-root': { m: 2, width: '75%' } }}>
						<FormControl sx={{ m: 5, p: 4, width: '60%' }} variant="outlined">
							<CssTextField
								label = "Patient ID"
								id="patient-id"
								name='patientId'
								value={consentInformation.patientId}
								onChange={handleInput}
							/>
							<CssTextField
								label="Purpose"
								id="purpose"
								name='purpose'
								value={consentInformation.purpose}
								onChange={handleInput}
							/>
						</FormControl>
					</Box>
				);
			case 1:
				return (
					<Box component="form" display="flex" justifyContent="center" sx={{ '& .MuiTextField-root': { m: 2, width: '75%' } }}>
						<FormControl sx={{ m: 5, width: '50%' }} variant="outlined">
							<CssTextField
								label="HIU ID"
								id="hiu-id"
								name='hiuId'
								value={consentInformation.hiuId}
								onChange={handleInput}
							/>
							<CssTextField 
								label="Doctor ID"
								id="doctorId"
								name='doctorId'
								value={consentInformation.doctorId}
								onChange={handleInput}
							/>
							<CssTextField 
								label="Doctor Name"
								id="requestor-name"
                                name='doctorName'
                                value={consentInformation.doctorName}
                                onChange={handleInput}
							/>
						</FormControl>
					</Box>
				);
			case 2:
				return (
					<Box display="flex" justifyContent="center" sx={{ '& .MuiTextField-root': { m: 2, width: '75%' } }}>
						{/* <Typography>Select start and end Date</Typography> */}
						<FormControl sx={{ m: 5, width: '30%' }} variant="outlined">
							<OutlinedInput
								sx={{ m: 2 }}
								type="date"
								id="dateStartRange"
								name='dateStartRange'
								value={consentInformation.dateStartRange}
								onChange={handleInput}
							/>
						</FormControl>
						<FormControl sx={{ m: 5, width: '30%' }} variant="outlined">
							<OutlinedInput
								sx={{ m: 2 }}
								type="date"
								id="dateEndRange"
								name='dateEndRange'
								value={consentInformation.dateEndRange}
								onChange={handleInput}
							/>
						</FormControl>
						{/* <LocalizationProvider dateAdapter={AdapterDayjs}>
						<DemoContainer
							components={[
								'DatePicker',
							]}
						>
							<DemoItem label="From"
							type="date"
                            id="dateStartRange"
                            name='dateStartRange'
                            value={consentInformation.dateStartRange}
                            onChange={handleInput}>
								<DatePicker defaultValue={dayjs()} />
							</DemoItem>
							<DemoItem label="To">
								<DatePicker defaultValue={dayjs()} />
							</DemoItem>
						</DemoContainer>
					</LocalizationProvider> */}
					</Box>
				);
			default:
				return null;
		}
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<LocalHospitalIcon sx={{ m: 2, fontSize: 50 }} />
						<Typography variant="h3" component="div" sx={{ flexGrow: 1, m: 2 }}>
							Fetch Patient Data
						</Typography>
						<Button variant="contained" color="primary" onClick={handleDashboardClick}sx={{ m: 2 }} startIcon={<GridViewRoundedIcon />}>Go to Dashboard</Button>
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
				<Stepper activeStep={activeStep} >
					{steps.map((label, index) => {
						const stepProps = {};
						const labelProps = {};

						if (isStepSkipped(index)) {
							stepProps.completed = false;
						}
						return (
							<Step key={label} {...stepProps} >
								<StepLabel {...labelProps}>{label}</StepLabel>
							</Step>
						);
					})}
				</Stepper>
				{activeStep === steps.length ? (
					<React.Fragment>
						<Typography sx={{ m: 5 }}>
							Consent Requested Succesfully
						</Typography>
						<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
							<Box sx={{ flex: '1 1 auto' }} />
							<Button onClick={handleReset}>Reset</Button>
						</Box>
					</React.Fragment>
				) : (
					<React.Fragment>
						<Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>

						{renderStepContent(activeStep)} {/* Render the form inputs for the current step */}

						<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
							<Button
								color="inherit"
								disabled={activeStep === 0}
								onClick={handleBack}
								sx={{ mr: 1 }}
							>
								Back
							</Button>
							<Box sx={{ flex: '1 1 auto' }} />
							{activeStep === steps.length - 1 ? <Button type='submit' onClick={handleSubmit}>Get Consent</Button> : <Button onClick={handleNext}>Next</Button>}
						</Box>
					</React.Fragment>
				)}
			</Box>
			
		</ThemeProvider>
	);
};
