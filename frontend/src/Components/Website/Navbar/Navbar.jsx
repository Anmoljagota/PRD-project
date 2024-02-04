import Styles from "./Navbar.module.css";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { GrNotes } from "react-icons/gr";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  IconButton,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Stack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  cartdata,
  user_adderss_details_get,
} from "../../../Redux/Product_redux/action";
import { useContext, useEffect, useState } from "react";
import { Mycontext } from "../Contextapi/ContextApi";
import Login from "../../../Pages/WebsitePages//Login/Login";
const Navbar = () => {
  const { searchproduct, search } = useContext(Mycontext);
  const [searchinput, setSearchinput] = useState();
  const loginuser = useSelector((details) => details.loginuser.isAuth);
  const data = useSelector((details) => details.homeproduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    dispatch(cartdata());
    dispatch(user_adderss_details_get());
  }, [loginuser]);
  const fixeddata = useSelector((details) => details.homeproduct);
  function navigatetoanother() {
    navigate("/");
  }
  function redirect() {
    localStorage.removeItem("token");
    navigate("/");
    dispatch(cartdata());
  }

  function showcart() {
    dispatch(cartdata());
    setTimeout(() => {
      if (
        fixeddata.cartdata !== "you are not authorized" &&
        fixeddata.cartdata !== "authorization first"
      ) {
        navigate("/cartpage");
      } else if (fixeddata.cartdata === "authorization first") {
        navigate("/nodata");
      } else {
        navigate("/cartlogin");
      }
    }, 1000);
  }
  return (
    <div className={Styles.parentNavbar}>
      <Stack className={Styles.stack}>
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
                  <MenuList color="black" fontSize="15px">
                    <MenuItem
                      icon={<AddIcon />}
                      command="⌘L"
                      as="a"
                      href="/login"
                    >
                      Login
                    </MenuItem>
                    <MenuItem
                      icon={<ExternalLinkIcon />}
                      command="⌘S"
                      as="a"
                      href="/signup"
                    >
                      Sign up
                    </MenuItem>
                    <MenuItem
                      icon={<RepeatIcon />}
                      command="⌘⇧N"
                      onClick={redirect}
                    >
                      Logout
                    </MenuItem>
                  </MenuList>
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
          <Box position="relative" w={"50%"} display={"inline-block"}>
            <input
              type="text"
              className={Styles.input}
              placeholder="Search products"
              onChange={searchproduct}
            />

            <Box
              position="absolute"
              background="#ffc220"
              padding="7px"
              borderRadius="100%"
              display={{ sm: "none", lg: "block" }}
              transform="translateY(-50%)"
              top="50%"
              right="8"
            >
              <AiOutlineSearch color="black" />
            </Box>
          </Box>

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
                  {localStorage.getItem("token") ? (
                    <h1 onClick={redirect}>Logout</h1>
                  ) : (
                    <>
                      <h1> Sign in</h1>

                      <Box fontWeight="700" fontSize="17px">
                        Account
                      </Box>
                    </>
                  )}
                </span>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                {localStorage.getItem("token") ? (
                  ""
                ) : (
                  <>
                    <Link to="/login">
                      <button className={Styles.signin}>
                        <h1>Signin or create account</h1>
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
                  </>
                )}
              </PopoverContent>
            </Popover>
          </Box>
          <Box
            position="relative"
            fontSize="25px"
            ml="50px"
            className={Styles.cart}
            onClick={showcart}
          >
            <Box
              background="#ffc220"
              borderRadius="100%"
              color="#2e2f32"
              boxShadow="inset 0 0 0 0.0625rem #803d10"
              width="25px"
              height="25px"
              fontSize="15px"
              className={Styles.flex}
            >
              {fixeddata.cartdata === "you are not authorized" ||
              fixeddata.cartdata === "authorization first"
                ? 0
                : fixeddata.cartdata.length}
            </Box>
            <AiOutlineShoppingCart />
          </Box>
        </Box>
      </Stack>
    </div>
  );
};

export default Navbar;
