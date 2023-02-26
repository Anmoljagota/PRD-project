import React, { useEffect } from "react";
 import Sidebar from "../../Components/Sidebar/Sidebar";
import Dashboard from "../Dashboard/Dashboard";
import { Box } from "@chakra-ui/react";
import Styles from "./Admin.module.css";
import { useDispatch } from "react-redux";
import { get_product, get_user } from "../../redux/All_Details/action";
const Admin = () => {
  useEffect(() => {
    dispatch(get_product);
    dispatch(get_user)
  }, []);
  const dispatch = useDispatch();
  return (
    <div >
     <Box className={Styles.maindiv}>
         <Box  height="100%" width="17%" > 
           <Sidebar />
         </Box>  
        <Box height="100%" width="80%" margin="auto">
          <Dashboard />
        </Box>  
      </Box>
    </div>
  );
};

export default Admin;
