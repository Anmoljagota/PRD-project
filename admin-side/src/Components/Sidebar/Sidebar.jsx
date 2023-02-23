import { Box, Center, Flex, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { AiOutlineCodeSandbox, AiOutlineDribbbleSquare } from "react-icons/ai";
import { BiBox } from "react-icons/bi";
import { TbUsers, TbReportSearch } from "react-icons/tb";
import { GoThreeBars } from "react-icons/go";
import { TbUserCheck } from "react-icons/tb";
import { HiDocumentReport } from "react-icons/hi";
const Sidebar = () => {
  const links = [
    { path: "/", title: "Home", icon: <AiOutlineCodeSandbox /> },
    { path: "/products", title: "Products", icon: <BiBox /> },
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
        <Center>
          <Img
            src="https://media.istockphoto.com/vectors/or-rgb-color-circles-icon-vector-id965515276?k=6&m=965515276&s=612x612&w=0&h=NX8ZsTcBudbQsMcbwclOEL0Epn4MEvNf-Vg0xwKwGlU="
            height="55px"
            width="55px"
            borderRadius="20px"
            padding="2px"
            marginTop="17%"
          />
        </Center>
        <Text textAlign="center" mt="2%">Parket walker</Text>
        <Text textAlign="center" color="grey">Parker@gmail.com</Text>
        <Text background="#37c47e" textAlign="center" width="70%" padding="4px" fontWeight="bold" margin="auto" mt="10px" fontSize="15px">Upgrade</Text> <br/>
        <ul style={{marginTop:"10px"}}>
          {links.map((link, index) => (
            <Stack>
              <NavLink
                key={index}
                style={{ padding: "16px", width: "90%", margin: "auto" }}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? Styles.active : Styles.default
                }
              >
                <Flex alignItems="center" height="100%">
                  {link.icon}
                  <li style={{ color: "white", marginLeft: "15px" }}>
                    {link.title}
                  </li>
                </Flex>
              </NavLink>
            </Stack>
          ))}
        </ul>
      </Box>
    </div>
  );
};

export default Sidebar;
