import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function DocDash() {
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

    const handleClickFetch = () => {
        navigate('/fetch');
    };
    const handleClickUpdate = () => {
        navigate('/update');
    };

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <LocalHospitalIcon sx={{ m: 2, fontSize: 50 }} />
                        <Typography variant="h3" component="div" sx={{ flexGrow: 1, m: 2 }}>
                            Welcome Doctor!
                        </Typography>
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
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h3"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            (Doctor Name here)
                        </Typography>
                        <Typography variant="h4" align="center" color="text.secondary">
                            Doctor Id: xxxxxxxxxxxxx
                        </Typography>
                        <Typography variant="h4" align='center' color="text.secondary">
                            Doctor Name: xxxxxxxxxxxxx
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={5}
                            justifyContent="center"
                        >
                            <Button variant="contained" size="large" startIcon={<CloudDownloadIcon />} onClick={handleClickFetch}>Fetch Data</Button>
                            <Button variant="contained" size="large" startIcon={<CloudUploadIcon />} onClick={handleClickUpdate}>Update Data</Button>
                        </Stack>
                    </Container>
                </Box>
            </main>
            {/* Footer */}
            {/* <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box> */}
            {/* End footer */}
        </ThemeProvider>
    );
}
