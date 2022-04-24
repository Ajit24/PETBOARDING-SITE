import React from 'react'
import "./NavBarMain.css"

import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

// import { useNavigate } from 'react-router-dom'

export default function Index() {
    const auth = false;
    // const navigate = useNavigate();
    return (
        <div>

            <div>
                <AppBar position="static">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            

                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Home
                            </Typography>

                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Add Pet
                            </Typography>

                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Login
                            </Typography>

                            <Button disabled = {auth} className='buttonjsx' onClick={() => {console.log("logout")}}>
                            <Typography disabled = {!auth} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Logout
                            </Typography>
                            </Button>

                        </Toolbar>
                    </Container>
                </AppBar>

            </div>

        </div>
    )
}
