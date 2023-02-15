import {
  Accordion,
  Box,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
  AccordionPanel,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { Filterdata, getdata } from "../Redux/Product_redux/action";
const DrawerExample = () => {
  //     const [params, setParams] = useSearchParams();
  //   let persist = params.getAll("category");
  //   const [value, setValue] = useState(persist || []);
  //   const dispatch = useDispatch();
  //   const location = useLocation();
  //   useEffect(() => {
  //     if (value) {
  //       let obj = {};
  //       obj.category = value;
  //       setParams(obj);
  //     }

  //     if (location.search !== "") {
  //     //   console.log("location.searchhhhhhhhhhhhhhhhhhh", location);
  //       const changledata = {
  //         params: {
  //           category: params.getAll("category"),
  //         },
  //       };
  //       dispatch(Filterdata(changledata));
  //     }
  //     // else {
  //     //   dispatch(getdata());
  //     // }
  //   }, [value, location.search]);
  //   function handleChange(e) {
  //     // console.log(e.target.value, "kkkkkkkkkkkkkkkkkkkkkkkkkkkk");
  //     const category = [...value];
  //     if (category.includes(e.target.value)) {
  //       category.splice(category.indexOf(e.target.value), 1);
  //     } else {
  //       category.push(e.target.value);
  //     }
  //     setValue(category);
  //   }
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} background="white" onClick={onOpen}>
        Filter
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          {/* <Accordion
              defaultIndex={[0]}
              allowMultiple
              textAlign="left"
              fontWeight="530"
              fontSize="21px"
              padding="4px"
            >
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight="630"
                      fontSize="21px"
                      padding="4px"
                    >
                      Category
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  overflow="scroll"
                  height="150px"
                  fontSize="17px"
                >
                  <Box
                    padding="2px"
                    position="relative"
                    fontWeight="700"
                    overflow="hidden"
                  >
                    <span style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id=""
                        onChange={handleChange}
                        checked={value.includes("men")}
                        value="men"
                      />{" "}
                      <label style={{ marginLeft: "5px" }} position="absolute">
                        Men
                      </label>
                    </span>
                    <span style={{ display: "flex", marginTop: "10px" }}>
                      <input
                        type="checkbox"
                        id=""
                        onChange={handleChange}
                        checked={value.includes("women")}
                        value="women"
                      />{" "}
                      <label style={{ marginLeft: "5px" }} position="absolute">
                        Women
                      </label>
                    </span>
                    <span style={{ display: "flex", marginTop: "10px" }}>
                      <input
                        type="checkbox"
                        id=""
                        onChange={handleChange}
                        checked={value.includes("child")}
                        value="child"
                      />{" "}
                      <label style={{ marginLeft: "5px" }} position="absolute">
                        Baby
                      </label>
                    </span>
                    <span style={{ display: "flex", marginTop: "10px" }}>
                      <input
                        type="checkbox"
                        id=""
                        onChange={handleChange}
                        checked={value.includes("unisex")}
                        value="unisex"
                      />{" "}
                      <label style={{ marginLeft: "5px" }} position="absolute">
                        Unisex
                      </label>
                    </span>
                    <span style={{ display: "flex", marginTop: "10px" }}>
                      <input
                        type="checkbox"
                        id=""
                        onChange={handleChange}
                        checked={value.includes("baby boys")}
                        value="baby boys"
                      />{" "}
                      <label style={{ marginLeft: "5px" }} position="absolute">
                        Baby Boys
                      </label>
                    </span>
                    <span style={{ display: "flex", marginTop: "10px" }}>
                      <input
                        type="checkbox"
                        id=""
                        onChange={handleChange}
                        checked={value.includes("baby girls")}
                        value="baby girls"
                      />{" "}
                      <label style={{ marginLeft: "5px" }} position="absolute">
                        Baby Girls
                      </label>
                    </span>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          */}
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default DrawerExample;
