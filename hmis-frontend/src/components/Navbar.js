import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import logo from '../pics/pics/logo-removebg-preview.png';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={logo} alt="Logo" style={{ width: '90px', height: 'auto' }} />
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>
                    <button class="btn btn-danger my-2 my-sm-0" type="submit" onClick={() => navigate('/logs')}>X</button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
