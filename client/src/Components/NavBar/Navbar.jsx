import React from 'react';
import "./Navbar.css"
// import LandingPage from '../LandingPage/LandingPage';
// import LandingPage2 from '../LandingPage/LandingPage2';
// import Category from "../Category/Category";
import { useNavigate } from 'react-router-dom';
// import AddCat2 from '../AddCat/AddCat2';
// import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import AddCat from '../AddCat/AddCat';
// import AppendData from '../AppendData/AppendData';
// import Services from '../Services/Services';
// import Discount from '../Discount/Discount';

export default function Navbar() {
    const auth = true
    const navigate = useNavigate()
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };


    return (
        <div>
            {/* <h1>name</h1> */}

            <div className='navBarDiv'>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList className='navBarDiv' onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Home" value="1" onClick={() => navigate("/home")}  />
                                {/* <Tab label="Why Us" value="2" /> */}
                                {/* <Tab label="About" value="3" /> */}
                                {/* <Tab label="Services" value="4" /> */}
                                <Tab label="Add Pet Details" value="5" onClick={() => navigate("/add_details_one")} />
                                {/* <Tab label="Contact Us" value="6" /> */}
                                {auth ? <Tab label="Log Out" disabled={!auth} value="8" onClick={() => navigate("/login")} />: <Tab label="Login" disabled={auth} value="7" onClick={() => navigate("/login")} />}
                                
                                

                            </TabList>
                        </Box>


                        {/* <TabPanel value="1"><LandingPage /></TabPanel>
                        <TabPanel value="2"> <><LandingPage2 /> <Category /> <Services /> <Discount /> </> </TabPanel>
                        <TabPanel value="3"><><AppendData /></></TabPanel>
                        <TabPanel value="4">
                            <Link to="/login"></Link>
                        </TabPanel>
                        <TabPanel value="5"><><AddCat /> </></TabPanel>
                        <TabPanel value="6">Item T6 hree</TabPanel> */}
                    </TabContext>
                </Box>
            </div>
        </div>
    )
}
