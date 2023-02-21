import { Button,Input, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, DrawerFooter, useDisclosure } from "@chakra-ui/react"
import React, { useContext } from "react"
import { Mycontext } from "../../Components/Contextapi/ContextApi"
import Styles from "../../css/Project.module.css";
import Login from "./Login";
const  LoginDrawer=()=> {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const {Opendrawer}=useContext(Mycontext)
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
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"md"}
      >
        <DrawerOverlay />
        <DrawerContent>
         <Login/>
        </DrawerContent>
      
      </Drawer>
    </>
  )
}
export default LoginDrawer