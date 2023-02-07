import Styles from "../css/Project.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrNotes } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuList,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Stack,
} from "@chakra-ui/react";
const Navbar = () => {
  const navigate = useNavigate();
  function navigatetoanother() {
    navigate("/");
  }
  return (
    <div className={Styles.parentNavbar}>
      <Stack
        fontWeight="700"
        fontSize="17px"
        height="105px"
        background="#0071dc"
        color="white"
        p="15px 7px 15px 7px"
      >
        <Box
          width="95%"
          margin="auto"
          height="inherit"
          justifyContent="center"
          display="flex"
          alignItems="center"
          position="relative"
          color="white"
          fontWeight="700"
        >
          <Box mr="50px">
            <Box
              className={Styles.flexall}
              fontSize="25px"
              onClick={navigatetoanother}
            >
              <Box className={Styles.hameburger}>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<HamburgerIcon />}
                    variant="outline"
                  />
                  <MenuList></MenuList>
                </Menu>
              </Box>

              <h1>Shopify</h1>
              <Image
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-991c/k2-_03d329be-5936-4ef6-ad29-95e392df014d.v1.png"
                marginLeft="10px"
                height="40px"
                width="40px"
              />
            </Box>
          </Box>
          <input
            type="text"
            className={Styles.input}
            placeholder="Search products"
          />
 <AiOutlineHeart
            style={{ marginLeft: "40px", fontSize: "25px" }}
            className={Styles.heart}
          />
<span
            style={{
              fontSize: "15px",
              padding: "3px",
              fontWeight: "400",
              marginLeft: "5px",
              width: "10%",
            }}
            className={Styles.history}
          >
            Recorder
            <Box fontWeight="700" fontSize="17px">
              My Items
            </Box>
          </span>
          <Box className={Styles.login}>
            <Popover>
              <HiOutlineUser style={{ marginLeft: "60px", fontSize: "25px" }} />
              <PopoverTrigger>
                <span
                  style={{
                    fontSize: "15px",
                    padding: "3px",
                    fontWeight: "400",
                    marginLeft: "5px",
                  }}
                >
                  Sign in
                  <Box fontWeight="700" fontSize="17px">
                    Account
                  </Box>
                </span>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <Link to="/login">
                  <button className={Styles.signin}>
                    Sign in or create account
                  </button>
                  <br />
                </Link>
                <hr />
                <Breadcrumb mt="15px">
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="#"
                      color="black"
                      marginLeft="80px"
                      fontWeight="400"
                      className={Styles.flexall}
                    >
                      <GrNotes />
                      Purchase history
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </Breadcrumb>
              </PopoverContent>
            </Popover>
          </Box>
          <Box
            position="relative"
            fontSize="25px"
            ml="50px"
            className={Styles.cart}
          >
            <AiOutlineShoppingCart />
          </Box>
        </Box>
      </Stack>
    </div>
  );
};

export default Navbar;
