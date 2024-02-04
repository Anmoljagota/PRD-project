
import { Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from '@chakra-ui/react'
import React from 'react'
import {IoIosArrowDown} from "react-icons/io";

const Category = () => {
  return (
    <div>
      <Popover>
  <PopoverTrigger>
    <Button padding="10px" background="white"  fontSize="15px" border="1px solid black">Shop by Category<IoIosArrowDown/></Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Confirmation!</PopoverHeader>
    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
</Popover>

    </div>
  )
}

export default Category
