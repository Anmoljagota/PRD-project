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
import Filtering from "./Filtering";
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

          <Filtering i={2} />
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default DrawerExample;
