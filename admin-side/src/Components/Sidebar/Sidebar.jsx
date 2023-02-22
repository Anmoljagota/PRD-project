import { Box, Flex, Stack } from "@chakra-ui/react";
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
        <ul >
          {links.map((link, index) => (
            <Stack  >
              <NavLink
                key={index}
              style={{padding:"16px",width:"90%",margin:"auto"}}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? Styles.active : Styles.default
                }
              >
                <Flex alignItems="center" height="100%" >
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
