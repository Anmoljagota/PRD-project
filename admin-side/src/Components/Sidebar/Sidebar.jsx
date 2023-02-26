// import { Box, Center, Flex, Img, Stack, Text } from "@chakra-ui/react";
import React, { useMemo } from "react";
import Styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { AiOutlineCodeSandbox, AiOutlineDribbbleSquare } from "react-icons/ai";
import { BiBox } from "react-icons/bi";
import { TbUsers, TbReportSearch } from "react-icons/tb";
import { GoThreeBars } from "react-icons/go";
import { TbUserCheck } from "react-icons/tb";
import { HiDocumentReport } from "react-icons/hi";
import { Box,Container, Stack,TextField  } from "@mui/material";
import { useSelector } from "react-redux";

const Sidebar = () => {
 const loginuserdata=useSelector((details)=>details.product_reducer.userdata[0])
 
//  console.log("kkk",loginuserdata)
  const links = [
    { path: "/", title: "Home", icon: <AiOutlineCodeSandbox /> },
    { path: "/adminproducts", title: "Products", icon: <BiBox /> },
    { path: "/users", title: "Members", icon: <GoThreeBars /> },
    { path: "/k", title: "Sales", icon: <TbUsers /> },
    { path: "/p", title: "Analysis", icon: <HiDocumentReport /> },
    { path: "/l", title: "Back Accounts", icon: <AiOutlineDribbbleSquare /> },
    { path: "/i", title: "Admin/Hr", icon: <TbUserCheck /> },
    { path: "/o", title: "Reporting", icon: <TbReportSearch /> },
  ];
  return (
    <div>
      <Box className={Styles.sidebarmain}>
       <Box  className={Styles.flexall}>
        
       <img
            src="https://media.istockphoto.com/vectors/or-rgb-color-circles-icon-vector-id965515276?k=6&m=965515276&s=612x612&w=0&h=NX8ZsTcBudbQsMcbwclOEL0Epn4MEvNf-Vg0xwKwGlU="
            className={Styles.image}
          />
       </Box>
          
       
      {loginuserdata.Name!==undefined && <Box  textAlign="center" mt="2%">{ loginuserdata.Name}</Box>}
    {loginuserdata.email!==undefined &&  <Box  textAlign="center" color="grey">{loginuserdata.email}</Box>}
        <Box  className={Styles.upgrade}>Upgrade</Box> <br/>
        <ul style={{marginTop:"10px"}}>
          {links.map((link, index) => (
            <Stack key={index}>
              <NavLink
                style={{ padding: "16px", width: "90%", margin: "auto" }}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? Styles.active : Styles.default
                }
              >
                <Box display="flex" alignItems="center" height="100%" color="white">
                  {link.icon}
                  <li style={{  marginLeft: "15px" ,textDecoration:"none"}}>
                    {link.title}
                  </li>
                </Box>
              </NavLink>
            </Stack>
          ))}
        </ul>
        <Stack border="1px solid white" className={Styles.profile}>

        </Stack>
      </Box>
    </div>
  );
};

export default Sidebar;
