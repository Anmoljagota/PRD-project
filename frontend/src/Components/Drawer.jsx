import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Radio,
  RadioGroup,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import Styles from "../css/Project.module.css";
import React from "react";
const PlacementExample = () => {
  const sortdata = [
    { sort: "Popular", value: "popular" },
    { sort: "Price- Low to High", value: "LTH" },
    { sort: "Price- High to Low", value: "HTL" },
    { sort: "Newest First", value: "newer" },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("right");

  return (
    <>
      <RadioGroup  height="40px" defaultValue={placement} onChange={setPlacement}    display="flex" justifyContent="center" alignItems="center">
        <Stack    >
          <Radio value="bottom" onClick={onOpen} >
            Sort
          </Radio>
        </Stack>
      </RadioGroup>
      {/* <Button colorScheme="blue" onClick={onOpen}>
        Open
      </Button> */}
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" color="grey">
            SORT BY
          </DrawerHeader>
          <hr />
          <DrawerBody >
            <Box width="100%" >
              {sortdata.map((data,i) => (
               
                  <Box
                    width="100%"
                    className={Styles.flexall}
                    mt="5px"
                    color="black"
                    fontWeight="700"
                    key={i}
                  >
                    <label htmlFor="">{data.sort}</label>
                    <input type="radio" value={data.value} name="anmol"/>
                  </Box>
               
              ))}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default PlacementExample;
