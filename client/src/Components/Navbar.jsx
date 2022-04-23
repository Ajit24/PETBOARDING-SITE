import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
 

// // export const Navbar = () => {
// //   return (
// //     <div style={{ marginTop: "2%" }}>
// //       <Link style={{ margin: "2%" }} to={"/"}>
// //         Home
// //       </Link>
// //       <Link style={{ margin: "2%" }} to={"/listing/create"}>
// //         Create Entity
// //       </Link>
// //     </div>
// //   );
// // };


import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function Navbar() {

  const [value, setValue] = React.useState('1');
   const navigate = useNavigate ()
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Home" value="1" onClick={()=> navigate("/") } />
            <Tab label="Add" value="2" onClick={()=> navigate("/listing/create")} />
            <Tab label="LogIn" value="3" onClick={()=> navigate("/login")} />
          </TabList>
        </Box>
        {/* <TabPanel value="1">
          <Link to={"/"}>
            Home
          </Link>
        </TabPanel>
        <TabPanel value="2">
          <Link to={"/listing/create"}>
            Create Entity
          </Link>
        </TabPanel> */}
      </TabContext>
    </Box>
    </div>
  )
}
