import Styles from "../css/Project.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrNotes } from "react-icons/gr";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import {
  cartdata,
  Filterdata,
  getdata,
  inputsearchdata,
} from "../Redux/Product_redux/action";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [params, searchParams] = useSearchParams("");

  let searchdata = params.getAll("q");
  const [search, setSearch] = useState(searchdata || []);
  const loginuser = useSelector((details) => details.loginuser.isAuth);
  const data = useSelector((details) => details.homeproduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  //single page
  useEffect(() => {
    dispatch(cartdata());
  }, [loginuser]);
  useEffect(() => {
    console.log("locationnnnnnnn", search);
    location.hash = "";
    if (search && location.hash === "") {
      data.obj.q = search;
      console.log("data.objjjjjjjjjjjjjjjjjjjjjjjjjjjjj", data.obj);
      searchParams(data.obj);
      console.log("iiiiiiiiiiiiiii", params);
      const searchdata = {
        params: {
          search: params.getAll("q"),
        },
      };
      dispatch(Filterdata(searchdata));
    }
  }, [search, location.search]);
  const fixeddata = useSelector((details) => details.homeproduct);
  console.log("fix", fixeddata);
  function navigatetoanother() {
    navigate("/");
  }
  function showcart() {
    dispatch(cartdata());
    if (
      fixeddata.cartdata !== "you are not authorized" &&
      fixeddata.cartdata !== "authorization first"
    ) {
      navigate("/singlepage");
    } else if (fixeddata.cartdata === "authorization first") {
      navigate("/nodata");
    } else {
      navigate("/cartlogin");
    }
  }
  function handeleChange(e) {
    setSearch(e.target.value);
    console.log(e.target.value, "avalueeeeeeeeeeeeeee");
  }
  // console.log(search)
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
            onChange={handeleChange}
            value={search}
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
                  {localStorage.getItem("token") ? (
                    <h1 onClick={() => localStorage.removeItem("token")}>
                      Logout
                    </h1>
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
              display="flex"
              justifyContent="center"
              alignItems="center"
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
