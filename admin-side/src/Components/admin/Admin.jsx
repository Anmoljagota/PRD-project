import React from "react";
 import Sidebar from "../../Components/Sidebar/Sidebar";
import Dashboard from "../Dashboard/Dashboard";
import { Box } from "@chakra-ui/react";
import Styles from "./Admin.module.css";
const Admin = () => {
  return (
    <div >
     <Box className={Styles.maindiv}>
         <Box  height="100%" width="17%">
          <Sidebar />
        </Box> 
        <Box border="3px solid green" height="100%" width="80%">
          <Dashboard />
        </Box>  
      </Box>
    </div>
  );
};

export default Admin;
