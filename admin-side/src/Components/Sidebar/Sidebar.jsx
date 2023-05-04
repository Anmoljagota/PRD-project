// import { Box, Center, Flex, Img, Stack, Text } from "@chakra-ui/react";
import React, { useMemo } from "react";
import Styles from "./Sidebar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineCodeSandbox, AiOutlineDribbbleSquare } from "react-icons/ai";
import { BiBox } from "react-icons/bi";
import { TbUsers, TbReportSearch } from "react-icons/tb";
import { GoThreeBars } from "react-icons/go";
import { TbUserCheck } from "react-icons/tb";
import { HiDocumentReport } from "react-icons/hi";
import { Box, Button, Container, Stack, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { VscDebugStackframeDot } from "react-icons/vsc";
import BasicModal from "./UpdateProfile";

const Sidebar = () => {
  const navigate=useNavigate()
  const loginuserdata = useSelector(
    (details) => details.product_reducer.userdata
  );

  console.log("kkk", loginuserdata);
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
  function RemoveToken(){
    localStorage.removeItem("AdminLogin")
    navigate("/login")
  }
  return (
    <div>
      <Box className={Styles.sidebarmain}>
        <Box className={Styles.flexall}>
          <img
            src="https://media.istockphoto.com/vectors/or-rgb-color-circles-icon-vector-id965515276?k=6&m=965515276&s=612x612&w=0&h=NX8ZsTcBudbQsMcbwclOEL0Epn4MEvNf-Vg0xwKwGlU="
            className={Styles.image}
          />
        </Box>
        {loginuserdata.length > 0 && (
          <Box textAlign="center" mt="4%">
            {loginuserdata[0].Name}
          </Box>
        )}
        {loginuserdata.length > 0 && (
          <Box textAlign="center" color="grey" mt="3%">
            {loginuserdata[0].email}
          </Box>
        )}
        <BasicModal /> <br />
        <ul style={{ marginTop: "20px" }}>
          {links.map((link, index) => (
            <Stack key={index}>
              <NavLink
                style={{ padding: "16px", width: "90%", margin: "auto" }}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? Styles.active : Styles.default
                }
              >
                <Box
                  display="flex"
                  alignItems="center"
                  height="100%"
                  color="white"
                >
                  {link.icon}
                  <li style={{ marginLeft: "15px", textDecoration: "none" }}>
                    {link.title}
                  </li>
                </Box>
              </NavLink>
            </Stack>
          ))}
        </ul>
        <Stack className={Styles.profile}>
          <>
            {loginuserdata.length > 0 && (
              <img
                src={loginuserdata[0].Image}
                alt="something wrong"
                className={Styles.profileimage}
              />
            )}
          </>
          <Box
            color="black"
            textAlign="center"
            fontWeight="700"
            fontSize="18px"
            mt="2%"
          >
            {loginuserdata.length > 0 && loginuserdata[0].Name} <br />
            <Box className={Styles.email}>
              {loginuserdata.length > 0 && loginuserdata[0].email}
            </Box>
            <button className={Styles.logout} onClick={RemoveToken}>Logout</button>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default Sidebar;
