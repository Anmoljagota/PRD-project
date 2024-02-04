import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Styles from "../../../css/Project.module.css";
import Login from "./Login";
const LoginDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <button
        className={Styles.signin}
        style={{ width: "50%", height: "40px", marginTop: "20px" }}
        onClick={onOpen}
      >
        Add to cart
      </button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"md"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Login
            width={"43%"}
            text={"Enter your email to sign in or create an account"}
            inputwidth={"60%"}
          />
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default LoginDrawer;
